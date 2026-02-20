import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hivin — Make It Happen",
  description:
    "Hivin connects you with people who share your energy and ambition. Join a real family: supportive, driven, ready to dream big and build together.",
  keywords: [
    "Hivin",
    "networking",
    "collaboration",
    "matching",
    "startup",
    "co-founders",
    "innovation",
  ],
  openGraph: {
    title: "Hivin — Make It Happen",
    description:
      "Connect with people who share your energy and ambition. Together, we can transform the world.",
    type: "website",
    url: "https://hivincorporation.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${outfit.variable} antialiased grain-overlay`}
      >
        {children}
      </body>
    </html>
  );
}
