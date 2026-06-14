import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SoftBackdrop from "@/components/SoftBackdrop";
import { Metadata } from "next";
import WhatsappButton from "@/components/WhatsappButton";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ficiali – Software Development Company",
    template: "%s | Ficiali",
  },
  description:
    "Ficiali is a reliable partner for software product engineering and team augmentation. Our unique selling point is thinking beyond technologies to provide innovative solutions.",
  keywords: [
    "Ficiali",
    "Ficiali software",
    "agentic ai",
    "software development",
    "web development",
    "mobile development",
    "product engineering",
    "team augmentation",
    "innovative solutions",
    "machine learning",
    "artificial intelligence",
    "cloud computing",
    "digital transformation",
    "technology consulting",
  ],
  authors: [{ name: "Ficiali" }],
  creator: "Ficiali",
  publisher: "Ficiali",

  openGraph: {
    title: "Ficiali – Software Development Company",
    description:
      "Ficiali is a reliable partner for software product engineering and team augmentation. Our unique selling point is thinking beyond technologies to provide innovative solutions.",
    siteName: "Ficiali",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ficiali – Software Development Company",
    description:
      "Ficiali is a reliable partner for software product engineering and team augmentation. Our unique selling point is thinking beyond technologies to provide innovative solutions.",
    creator: "@ficiali",
  },

  robots: {
    index: true,
    follow: true,
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
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7233895943371921"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <SoftBackdrop />
        <Navbar />
        {children}
        <Footer />
        <WhatsappButton />
      </body>
    </html>
  );
}
