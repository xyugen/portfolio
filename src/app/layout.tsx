import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { cn } from "@/lib/utils";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import FlareCursor from "@/components/flare-cursor";

export const metadata: Metadata = {
    title: "Renzyx",
    description: "A portfolio website for Renzyx",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased transition ease-linear",
                    `${GeistSans.className} ${GeistMono.className}`
                )}
            >
                <NextTopLoader color="#000000" showSpinner={false} />
                <Header />
                <main className="cursor-none">
                    <FlareCursor />
                    {children}
                </main>
                <Footer />
                <Toaster />
            </body>
        </html>
    );
}
