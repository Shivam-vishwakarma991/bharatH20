import type { Metadata } from "next";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";

const siteUrl = "https://bharath20.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Bharat H2O - Custom Branded Water Bottles for Restaurants, Cafés & Hotels",
    template: "%s | Bharat H2O",
  },
  description: "Transform your hospitality business with premium custom-branded water bottles. Trusted by 100+ restaurants, cafés, and hotels across India. From 200ml to 20L - we handle design, branding, and supply.",
  keywords: [
    "custom water bottles",
    "branded water",
    "restaurant supplies",
    "hotel water bottles",
    "café branding",
    "hospitality supplies",
    "custom branding",
    "water bottle suppliers India",
    "Bharat H2O",
    "private label water",
    "custom label water bottles",
    "restaurant water bottles",
    "hotel amenities",
  ],
  authors: [{ name: "Bharat H2O" }],
  creator: "Bharat H2O",
  publisher: "Bharat H2O",
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
  icons: {
    icon: [
      { url: "/h20.png", sizes: "32x32", type: "image/png" },
      { url: "/h20.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/h20.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/h20.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Bharat H2O",
    title: "Bharat H2O - Custom Branded Water Bottles for Restaurants, Cafés & Hotels",
    description: "Transform your hospitality business with premium custom-branded water bottles. Trusted by 100+ restaurants, cafés, and hotels across India. From 200ml to 20L - we handle design, branding, and supply.",
    images: [
      {
        url: "/heroimg.jpeg",
        width: 1200,
        height: 630,
        alt: "Bharat H2O - Custom Branded Water Bottles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bharat H2O - Custom Branded Water Bottles for Restaurants, Cafés & Hotels",
    description: "Transform your hospitality business with premium custom-branded water bottles. Trusted by 100+ restaurants, cafés, and hotels across India.",
    images: ["/heroimg.jpeg"],
    creator: "@bharath2o",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Business",
  verification: {
    // Add your verification codes here when you have them
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={siteUrl} />
        <meta name="theme-color" content="#0066cc" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />
      </head>
      <body className="antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
