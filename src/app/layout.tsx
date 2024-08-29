import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { cn } from "@/lib/utils";

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
          <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          `${GeistSans.className} ${GeistMono.className}`)}>
              {children}
          </body>
      </html>
  );
}
