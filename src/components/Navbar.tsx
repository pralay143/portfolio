"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const THEME_EVENT = "themechange";

function subscribeToTheme(callback: () => void) {
  window.addEventListener(THEME_EVENT, callback);
  return () => window.removeEventListener(THEME_EVENT, callback);
}

function getThemeSnapshot() {
  return document.documentElement.classList.contains("dark");
}

function getServerThemeSnapshot() {
  return false;
}

function setTheme(dark: boolean) {
  document.documentElement.classList.toggle("dark", dark);
  document.documentElement.classList.toggle("light", !dark);
  localStorage.setItem("theme", dark ? "dark" : "light");
  window.dispatchEvent(new Event(THEME_EVENT));
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isDark = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  function toggleTheme() {
    setTheme(!isDark);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-black/[.08] bg-white/80 backdrop-blur dark:border-white/[.145] dark:bg-black/80">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          onClick={() => setMobileOpen(false)}
          className="font-semibold tracking-tight"
        >
          Pralay
        </Link>

        <div className="flex items-center gap-2">
          <ul className="hidden gap-6 text-sm font-medium sm:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="rounded-full p-2 text-zinc-600 transition-colors hover:bg-black/[.06] hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-white/[.08] dark:hover:text-zinc-50"
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className="rounded-full p-2 text-zinc-600 transition-colors hover:bg-black/[.06] hover:text-zinc-950 sm:hidden dark:text-zinc-400 dark:hover:bg-white/[.08] dark:hover:text-zinc-50"
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <ul className="flex flex-col gap-1 border-t border-black/[.08] px-6 py-4 text-sm font-medium sm:hidden dark:border-white/[.145]">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-2 text-zinc-600 transition-colors hover:bg-black/[.06] hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-white/[.08] dark:hover:text-zinc-50"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="6" y1="18" x2="18" y2="6" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2" x2="12" y2="4" />
      <line x1="12" y1="20" x2="12" y2="22" />
      <line x1="4" y1="12" x2="2" y2="12" />
      <line x1="22" y1="12" x2="20" y2="12" />
      <line x1="5" y1="5" x2="6.5" y2="6.5" />
      <line x1="17.5" y1="17.5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="17.5" y2="6.5" />
      <line x1="6.5" y1="17.5" x2="5" y2="19" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />
    </svg>
  );
}
