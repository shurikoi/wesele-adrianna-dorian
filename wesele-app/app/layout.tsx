import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { fellFrench, sfPro } from "@/components/fonts";
import ModalProvider from "@/components/contexts/ModalProvider";
import { Toaster } from "react-hot-toast";
import GuestAccessProvider from "@/components/contexts/GuestAccessProvider";
import AuthProvider from "@/components/contexts/AuthProvider";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/react"

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
  description: "Strona weselna Ady i Doriana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fellFrench.variable} ${sfPro.variable} bg-backgroundPeach text-white antialiased`}
      >
        <AuthProvider>
          <GuestAccessProvider>
            <ModalProvider>
              <Toaster />
              <div id="modals-root" className="fixed z-50" />
              <div className="relative">
                <Header className="p-8 absolute top-0 left-0 z-40 w-full" />
                {children}
                <Analytics />
              </div>
            </ModalProvider>
          </GuestAccessProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
