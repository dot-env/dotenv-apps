import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GridPattern } from "../components/ui/grid-pattern";
import { cn } from "#/lib/utils";
import { Navbar1 } from "#/components/shadcnblocks-com-navbar1";
import { navData } from "#/configs/nav-bar";
import { meta } from "#/configs/site";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import { Toaster } from "#/components/ui/toaster";
import Footer from "#/components/footer";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = meta;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth`}
      >
        <GridPattern
          width={30}
          height={30}
          x={-1}
          y={-1}
          strokeDasharray={"4 2"}
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          )}
        />
        <ReCaptchaProvider strategy="lazyOnload" popover="manual" lang="en">
          <div className="absolute inset-2 mx-auto max-w-4xl">
            <Navbar1 {...navData} />
            <div className="flex flex-col gap-6 min-h-screen font-[family-name:var(--font-geist-sans)]">
              {children}
              <Footer />
            </div>
          </div>
          <Toaster />
        </ReCaptchaProvider>
      </body>
      <Analytics />
    </html>
  );
}
