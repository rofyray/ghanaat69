import type { Metadata } from "next";
import { Press_Start_2P, Space_Mono } from "next/font/google";
import "./globals.css";

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🇬🇭</text></svg>",
  },
  title: "Ghana@69 - How Ghanaian Are You?",
  description:
    "Play identity bingo for Ghana's 69th Independence Day! Tap the squares that apply to you, get your score, and share with friends.",
  openGraph: {
    title: "Ghana@69 - How Ghanaian Are You?",
    description:
      "Play identity bingo for Ghana's 69th Independence Day! Tap the squares, get your score, challenge your friends.",
    url: "https://ghanaat69.vercel.app",
    siteName: "Ghana@69",
    type: "website",
    locale: "en_GH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghana@69 - How Ghanaian Are You?",
    description:
      "Play identity bingo for Ghana's 69th Independence Day!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pressStart.variable} ${spaceMono.variable} font-body antialiased bg-deep-charcoal min-h-screen crt-vignette`}
      >
        {children}
      </body>
    </html>
  );
}
