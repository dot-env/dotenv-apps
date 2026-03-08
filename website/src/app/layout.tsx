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
import { JsonLd } from "#/components/json-ld";
import { siteConfig } from "#/configs/site";
import type { Organization, WithContext } from "schema-dts";

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
  const organizationJsonLd: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    sameAs: [
      siteConfig.links.twitter,
      "https://www.linkedin.com/company/dotenv_co",
      "https://www.facebook.com/dotenv_co",
      "https://www.instagram.com/dotenv_co",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+27-68-172-1606",
      contactType: "customer service",
      email: "team@dotenv.co.za",
      areaServed: "ZA",
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Johannesburg",
      addressRegion: "GP",
      addressCountry: "ZA",
    },
  };

  return (
    <html lang="en">
      <head>
        <JsonLd data={organizationJsonLd} />
      </head>
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
            "mask-[radial-gradient(300px_circle_at_center,white,transparent)]",
          )}
        />
        <ReCaptchaProvider strategy="lazyOnload" popover="manual" lang="en">
          <div className="absolute inset-2 mx-auto max-w-4xl">
            <Navbar1 {...navData} />
            <div className="flex flex-col gap-6 min-h-screen font-(family-name:--font-geist-sans)">
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
