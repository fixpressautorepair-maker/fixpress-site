import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title:
    "Fixpress Automotive Services | Mobile Mechanic & Pre-Purchase Vehicle Inspections | Rhode Island",
  description:
    "Professional mobile automotive diagnostics, pre-purchase inspections, maintenance, and repair services throughout Rhode Island. Honest, reliable automotive expertise brought directly to you.",
  keywords: [
    "Fixpress Automotive Services",
    "mobile mechanic Rhode Island",
    "pre-purchase inspection Rhode Island",
    "used car inspection Rhode Island",
    "vehicle inspection Warwick RI",
    "mobile auto repair",
    "automotive diagnostics",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
