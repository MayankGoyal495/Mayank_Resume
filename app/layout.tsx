import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mayankgoyal.com"),
  title: "Mayank Goyal | Technical Product Builder",
  description:
    "Portfolio by Mayank Goyal, featuring software development, AI/ML models, and product building.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Mayank Goyal | Technical Product Builder",
    description:
      "Portfolio by Mayank Goyal, featuring software development, AI/ML models, and product building.",
    siteName: "Mayank Goyal Portfolio",
    type: "website",
    url: "https://mayankgoyal.com",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Mayank Goyal portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayank Goyal | Technical Product Builder",
    description:
      "Portfolio by Mayank Goyal, featuring software development, AI/ML models, and product building.",
    images: ["/twitter-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
