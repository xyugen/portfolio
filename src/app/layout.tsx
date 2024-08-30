import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import FlareCursor from "@/components/flare-cursor";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
    title: "Renz Arias",
    description: "Software developer from the Philippines",
    openGraph: {
        title: "Renz Arias",
        description: "Software developer from the Philippines",
        // url: "https://renzyx.dev",
        siteName: "Renz Arias",
        locale: "en-US",
        type: "website",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    twitter: {
        title: "Renz Arias",
        card: "summary_large_image",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${GeistSans.variable} ${GeistMono.variable} min-h-screen bg-background font-sans antialiased transition ease-linear`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem
                >
                    <NextTopLoader color="#000000" showSpinner={false} />
                    <Header />
                    <main className="relative cursor-none">
                        <FlareCursor />
                        {children}
                    </main>
                    <Footer />
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
}
