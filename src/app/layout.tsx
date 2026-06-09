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
import LenisProvider from "@/components/lenis-provider";

export const metadata: Metadata = {
  title: "Renz Arias — Creative Technologist",
  description:
    "Filipino creative technologist building across web, mobile, and AI. Software engineer crafting clean, efficient, and beautiful digital experiences.",
  openGraph: {
    title: "Renz Arias — Creative Technologist",
    description:
      "Filipino creative technologist building across web, mobile, and AI.",
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
    title: "Renz Arias — Creative Technologist",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} min-h-screen bg-background font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LenisProvider>
            <NextTopLoader color="#2b7fff" showSpinner={false} />
            <Header />
            <main className="relative cursor-none">
              <FlareCursor />
              {children}
            </main>
            <Footer />
            <Toaster />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
