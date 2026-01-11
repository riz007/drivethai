import type React from "react";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/contexts/language-context";
import { AuthProvider } from "@/contexts/auth-context";
import { Toaster } from "@/components/ui/sonner";
import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";

const geist = Geist({
  subsets: ["latin", "latin-ext"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DriveThai - Learn Traffic Rules & Driving Laws",
  description:
    "Master Thai road signs and traffic regulations for motorcycles, cars, and trucks. Bilingual guide in English and Thai with interactive learning.",
  keywords: [
    "Drive Thai",
    "DriveThai",
    "Thai road signs",
    "traffic rules Thailand",
    "driving laws Thailand",
    "Thai driving license",
    "road safety Thailand",
    "ป้ายจราจรไทย",
  ],
  authors: [{ name: "DriveThai" }],
  generator: "riz1.dev",
  applicationName: "DriveThai",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "DriveThai",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: "Thai Road Signs",
    title: "Thai Road Signs - Learn Traffic Rules",
    description: "Master Thai road signs and driving laws in English and Thai",
    url: "https://drivethai.vercel.app",
    images: [
      {
        url: "https://drivethai.vercel.app/icon-512.png",
        width: 1200,
        height: 630,
        alt: "DriveThai - Learn Thai Road Signs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thai Road Signs - Learn Traffic Rules",
    description: "Master Thai road signs and driving laws in English and Thai",
    images: [
      {
        url: "https://drivethai.vercel.app/icon-512.png",
        width: 1200,
        height: 630,
        alt: "DriveThai - Learn Thai Road Signs",
      },
    ],
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/icon-192.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable}`}
      suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground">
        <AuthProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </AuthProvider>
        <Toaster />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />{" "}
      </body>
    </html>
  );
}
