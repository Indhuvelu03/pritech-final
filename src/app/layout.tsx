import type { Metadata } from "next";
import "./globals.css";
import {
  createSeoMetadata,
  defaultSeo,
  localBusinessJsonLd,
  organizationJsonLd,
  siteUrl,
} from "./seo";

export const metadata: Metadata = {
  ...createSeoMetadata({
    title: defaultSeo.title,
    description: defaultSeo.description,
    path: "/",
  }),
  metadataBase: new URL(siteUrl),
  applicationName: "Pritech Engineering",
  authors: [{ name: "Pritech Engineering" }],
  creator: "Pritech Engineering",
  publisher: "Pritech Engineering",
  category: "Industrial Machinery",
  title: {
    default: defaultSeo.title,
    template: "%s | Pritech Engineering",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Audiowide&family=Michroma&family=Orbitron:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd, localBusinessJsonLd]),
          }}
        />
      </body>
    </html>
  );
}
