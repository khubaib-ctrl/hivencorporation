import type { Metadata } from "next";
import "./globals.css";

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
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,600,700,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased grain-overlay">
        {children}
      </body>
    </html>
  );
}
