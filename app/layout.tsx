import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stratton Merch | Fresh Startup Merchandise, Done Right.",
  description: "We create custom merchandise that turns your team and customers into brand ambassadors.",
  icons: {
    icon: '/stratton_lion_logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased font-sans`}
        style={{ fontFamily: 'var(--font-inter)' }}
      >
        {children}
      </body>
    </html>
  );
}
