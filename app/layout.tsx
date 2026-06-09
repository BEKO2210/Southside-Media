import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { content } from "@/lib/content";
import { CookieBanner } from "@/components/cookie-banner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(content.meta.url),
  title: content.meta.title,
  description: content.meta.description,
  keywords: [
    "Webagentur",
    "Webdesign Freiberg",
    "Website Festpreis",
    "WordPress",
    "Next.js",
    "DSGVO",
    "BFSG",
    "SEO",
  ],
  authors: [{ name: content.company.fullLegalName }],
  openGraph: {
    type: "website",
    locale: content.meta.locale,
    url: content.meta.url,
    siteName: content.meta.siteName,
    title: content.meta.title,
    description: content.meta.description,
    images: [{ url: "/media/hero.png", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: content.meta.themeColor,
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${inter.variable} ${sora.variable} dark`}>
      <body className="min-h-screen bg-ink font-sans text-zinc-100">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
