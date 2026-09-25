import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { siteConfig } from '@/config/site';
import { CONTACT_LIMITS as LIMITS, HONEYPOT_FIELD, isContactReason } from '@/config/contact';

// Server-only route handler: RESEND_API_KEY is read from the server environment
// and never sent to the browser. Responses only contain generic messages.

// Resend's shared test sender works without a verified domain. Set
// CONTACT_FROM_EMAIL (e.g. "Portfolio <contact@your-domain.com>") once a
// domain is verified in Resend.
const DEFAULT_FROM = 'Portfolio Contact <onboarding@resend.dev>';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// Same body the real success path returns, so bots cannot tell they were caught.
function successResponse() {
  return NextResponse.json({ success: true, message: 'Email sent successfully' });
}

function badRequest(error: string) {
  return NextResponse.json({ error }, { status: 400 });
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return badRequest('Invalid request body');
  }

  const fields = (body ?? {}) as Record<string, unknown>;

  // Honeypot: people never see this field, so any value means a bot. Drop the
  // submission silently without sending anything.
  const honeypot = fields[HONEYPOT_FIELD];
  if (honeypot !== undefined && honeypot !== '') {
    console.warn('Contact form: honeypot submission ignored');
    return successResponse();
  }

  const { name, email, message, reason } = fields;
  if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
    return badRequest('Missing required fields');
  }

  const trimmed = { name: name.trim(), email: email.trim(), message: message.trim() };
  if (!trimmed.name || !trimmed.email || !trimmed.message) {
    return badRequest('Missing required fields');
  }
  if (trimmed.name.length < LIMITS.name.min || trimmed.name.length > LIMITS.name.max) {
    return badRequest(`Name must be ${LIMITS.name.min}–${LIMITS.name.max} characters`);
  }
  if (trimmed.email.length > LIMITS.email.max || !EMAIL_PATTERN.test(trimmed.email)) {
    return badRequest('Invalid email format');
  }
  if (trimmed.message.length < LIMITS.message.min || trimmed.message.length > LIMITS.message.max) {
    return badRequest(`Message must be ${LIMITS.message.min}–${LIMITS.message.max} characters`);
  }

  // Optional; when present it must be one of the options the form offers.
  if (reason !== undefined && reason !== '' && !isContactReason(reason)) {
    return badRequest('Invalid reason');
  }
  const contactReason = isContactReason(reason) ? reason : null;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('Contact form: RESEND_API_KEY is not configured');
    return NextResponse.json({ error: 'Message service is unavailable' }, { status: 503 });
  }

  const resend = new Resend(apiKey);
  // Keep header values on one line.
  const subjectName = trimmed.name.replace(/[\r\n]+/g, ' ');
  const reasonLabel = contactReason ?? 'Not specified';

  try {
    // The Resend SDK reports API failures in `error` instead of throwing.
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM,
      to: siteConfig.email,
      replyTo: trimmed.email,
      subject: `New Portfolio Contact${contactReason ? ` (${contactReason})` : ''} from ${subjectName}`,
      text: `Name: ${trimmed.name}\nEmail: ${trimmed.email}\nReason: ${reasonLabel}\n\n${trimmed.message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #333;">New Message from Your Portfolio</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${escapeHtml(trimmed.name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(trimmed.email)}</p>
            <p><strong>Reason:</strong> ${escapeHtml(reasonLabel)}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; color: #666;">${escapeHtml(trimmed.message)}</p>
          </div>
          <p style="color: #999; font-size: 12px; margin-top: 20px;">
            Reply directly to this email to contact the visitor.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Contact form: Resend rejected the email', {
        name: error.name,
        message: error.message,
      });
      return NextResponse.json({ error: 'Failed to send message' }, { status: 502 });
    }

    return successResponse();
  } catch (error) {
    console.error('Contact form: unexpected error sending email', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
