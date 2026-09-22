export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/[.08] dark:border-white/[.145]">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-6 py-8 text-sm text-zinc-600 sm:flex-row sm:justify-between dark:text-zinc-400">
        <p>&copy; {year} Your Name. All rights reserved.</p>
        <div className="flex gap-4">
          <a
            href="https://github.com/pralay143"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-950 dark:hover:text-zinc-50"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-950 dark:hover:text-zinc-50"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
