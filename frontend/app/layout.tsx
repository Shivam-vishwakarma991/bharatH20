import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bharat H2O - Custom Branded Water Bottles for Restaurants, Cafés & Hotels",
  description: "Transform your hospitality business with premium custom-branded water bottles. Trusted by 20+ restaurants, cafés, and hotels across India. From 200ml to 20L - we handle design, branding, and supply.",
  keywords: "custom water bottles, branded water, restaurant supplies, hotel water bottles, café branding, hospitality supplies, custom branding, water bottle suppliers India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
