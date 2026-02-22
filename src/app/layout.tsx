import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Uzair Ali - Full Stack Developer & Generative AI",
  description:
    "Uzair Ali — Full stack developer specializing in Angular, React, Node.js, Next.js, and generative AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${syne.variable}`}
    >
      <body className="min-h-screen bg-surface font-sans text-white antialiased">
        {children}
      </body>
    </html>
  );
}
