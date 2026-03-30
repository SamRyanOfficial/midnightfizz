import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import EventSchema from "@/components/EventSchema";
import { siteConfig } from "@/config/site";
import { contactConfig } from "@/config/contact";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.metadata.title,
  description: siteConfig.metadata.description,
  keywords: siteConfig.metadata.keywords,
  openGraph: {
    title: siteConfig.metadata.title,
    description: siteConfig.metadata.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Live Music`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MusicGroup",
        "@id": `${siteConfig.url}/#organization`,
        "name": siteConfig.name,
        "url": siteConfig.url,
        "image": `${siteConfig.url}/images/logo.png`,
        "description": siteConfig.metadata.description,
        "contactPoint": {
          "@type": "ContactPoint",
          "email": contactConfig.email,
          "contactType": "customer service",
          "availableLanguage": "English",
        },
        "sameAs": [
          contactConfig.social.facebook,
          contactConfig.social.instagram,
          contactConfig.social.youtube,
        ].filter(Boolean),
      },
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#business`,
        "name": siteConfig.name,
        "url": siteConfig.url,
        "logo": `${siteConfig.url}/images/logo.png`,
        "description": siteConfig.metadata.description,
        "contactPoint": {
          "@type": "ContactPoint",
          "email": contactConfig.email,
          "contactType": "customer service",
          "availableLanguage": "English",
        },
        "sameAs": [
          contactConfig.social.facebook,
          contactConfig.social.instagram,
          contactConfig.social.youtube,
        ].filter(Boolean),
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        "url": siteConfig.url,
        "name": siteConfig.name,
        "description": siteConfig.metadata.description,
        "publisher": {
          "@id": `${siteConfig.url}/#organization`,
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <EventSchema />
      </head>
      <body className="font-sans antialiased bg-[#0D0A0E] text-[#F0E4C4]">
        {children}
      </body>
    </html>
  );
}
