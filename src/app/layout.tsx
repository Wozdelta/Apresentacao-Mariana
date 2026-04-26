import type { Metadata } from "next";
import { Inter, Anton } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Borcelle Burger | Brand Guidelines",
  description: "Official brand guideline of Borcelle Burger — where bold flavors meet bold branding.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${anton.variable} h-full antialiased bg-borcelle-cream text-borcelle-dark`}
    >
      <body className="h-full font-sans overflow-hidden">{children}</body>
    </html>
  );
}
