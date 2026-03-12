import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import EventSchema from "@/components/EventSchema";
import { siteConfig } from "@/config/site";
import { contactConfig } from "@/config/contact";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <EventSchema />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
