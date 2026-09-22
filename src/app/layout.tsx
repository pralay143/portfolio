import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your Name — Portfolio",
  description: "Software engineer building fast, accessible web applications.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-zinc-950 dark:bg-black dark:text-zinc-50">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");var m=window.matchMedia("(prefers-color-scheme: dark)").matches;var c=document.documentElement.classList;if(t==="dark"||(!t&&m)){c.add("dark")}else if(t==="light"){c.add("light")}}catch(e){}})();`,
          }}
        />
        <Navbar />
        <main className="mx-auto w-full max-w-3xl flex-1 px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
