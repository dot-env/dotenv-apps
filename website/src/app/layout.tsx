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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReCaptchaProvider>
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
          <div className="absolute inset-2 mx-auto max-w-4xl">
            <Navbar1 {...navData} />
            {children}
          </div>
          <Toaster />
        </ReCaptchaProvider>
      </body>
    </html>
  );
}
