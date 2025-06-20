import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { fellFrench, sfPro } from "@/components/fonts";
import ModalProvider from "@/components/contexts/ModalProvider";
import { Toaster } from "react-hot-toast";
import GuestAccessProvider from "@/components/contexts/GuestAccessProvider";
import AuthProvider from "@/components/contexts/AuthProvider";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/react";
import TanstackProvider from "@/components/contexts/TanstackProvider";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";
import GuestAccessesProvider from "@/components/contexts/GuestAccessesProvider";
import TablesProvider from "@/components/contexts/TablesProvider";

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
                    <TanstackProvider>
                        <GuestAccessesProvider>
                            <GuestAccessProvider>
                                <ModalProvider>
                                    <TablesProvider>
                                        <Toaster />
                                        <SkeletonTheme baseColor="#E8DCCB" highlightColor="#D6C5B1">
                                            <div id="modals-root" className="fixed z-50" />
                                            <div className="relative">
                                                <Header className="p-8 absolute top-0 left-0 z-40 w-full" />
                                                {children}
                                                <Analytics />
                                            </div>
                                        </SkeletonTheme>
                                    </TablesProvider>
                                </ModalProvider>
                            </GuestAccessProvider>
                        </GuestAccessesProvider>
                    </TanstackProvider>
                </AuthProvider>
            </body>
        </html>
    );
}
