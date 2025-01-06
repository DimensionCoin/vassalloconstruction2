import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/Header";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Vassallo Construction",
  description:
    "Professional construction services with a commitment to quality and innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-gradient-to-b from-black via-[#1a1a1a] to-[#2a2a2a] text-white`}
      >
        <Header />
        <main>{children}</main>
        <footer className="bg-black text-white py-6 text-center">
          <div className="container mx-auto px-4">
            <p>
              &copy; {new Date().getFullYear()} Vassallo Construction. All
              rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
