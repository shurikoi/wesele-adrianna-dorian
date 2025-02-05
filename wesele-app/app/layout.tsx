import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { fellFrench, sfPro } from "@/components/fonts";
import ModalProvider from "@/components/contexts/ModalProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adriana & Dorian",
  description: "Wesele Adriany i Doriana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fellFrench.variable} ${sfPro.variable} antialiased`}
      >
        <ModalProvider>
          <div id="modals-root" />
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}
