// Shared by the contact form and the /api/contact route so the server only
// accepts reasons the form actually offers.
export const contactReasons = [
  "Job opportunity",
  "Freelance",
  "Just saying hi",
] as const;

export type ContactReason = (typeof contactReasons)[number];

export function isContactReason(value: unknown): value is ContactReason {
  return contactReasons.includes(value as ContactReason);
}

// Hidden field that people never see or fill in; bots that fill every input do.
export const HONEYPOT_FIELD = "website";

export const CONTACT_LIMITS = {
  name: { min: 2, max: 100 },
  email: { max: 254 },
  message: { min: 10, max: 5000 },
} as const;
