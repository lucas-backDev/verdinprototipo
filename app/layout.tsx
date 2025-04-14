import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const fonte1 = Nunito({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fonte2 = Nunito({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fonte1.variable} ${fonte2.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
