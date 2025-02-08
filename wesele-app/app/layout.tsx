import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { fellFrench, sfPro } from "@/components/fonts";
import ModalProvider from "@/components/contexts/ModalProvider";
import { Toaster } from "react-hot-toast";
import GuestDataProvider from "@/components/contexts/GuestDataProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adrianna & Dorian",
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
        className={`${geistSans.variable} ${geistMono.variable} ${fellFrench.variable} ${sfPro.variable} bg-backgroundPeach antialiased`}
      >
        <GuestDataProvider>
          <ModalProvider>
            <Toaster />
            <div id="modals-root" />
            {children}
          </ModalProvider>
        </GuestDataProvider>
      </body>
    </html>
  );
}
