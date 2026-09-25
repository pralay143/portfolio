import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  homeDescription,
  pageMetadata,
  siteName,
  siteTitle,
  siteUrl,
} from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Site-wide defaults. Each page sets its own description, canonical URL and
// social metadata through pageMetadata().
const { openGraph, twitter } = pageMetadata({
  description: homeDescription,
  path: "/",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  description: homeDescription,
  openGraph: { ...openGraph, url: undefined },
  twitter,
  title: {
    default: siteTitle,
    template: `%s — ${siteName}`,
  },
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");var c=document.documentElement.classList;if(t==="light"){c.add("light")}else{c.add("dark")}}catch(e){}})();`,
          }}
        />
        <Navbar />
        <main className="mx-auto w-full max-w-6xl flex-1 px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
