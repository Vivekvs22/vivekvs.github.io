import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/vivekvs.github.io" : "";
const siteUrl = isProd ? "https://vivekvs22.github.io/vivekvs.github.io" : "http://localhost:3000";

export const metadata: Metadata = {
  title: "Vivek V S | Full Stack Developer",
  description:
    "Portfolio of Vivek V S, Full Stack Developer specializing in React, Next.js, Firebase, and production MVP delivery.",
  icons: {
    icon: [
      { url: `${basePath}/favicon.png`, sizes: "32x32", type: "image/png" },
      { url: `${basePath}/favicon.png`, sizes: "16x16", type: "image/png" },
    ],
    apple: `${basePath}/favicon.png`,
  },
  openGraph: {
    title: "Vivek V S | Full Stack Developer",
    description: "Portfolio of Vivek V S, Full Stack Developer specializing in React, Next.js, Firebase, and production MVP delivery.",
    url: siteUrl,
    siteName: "Vivek V S Portfolio",
    images: [
      {
        url: `${siteUrl}/social_preview.png`,
        width: 1200,
        height: 630,
        alt: "Vivek V S - Full Stack Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vivek V S | Full Stack Developer",
    description: "Portfolio of Vivek V S, Full Stack Developer specializing in React, Next.js, Firebase, and production MVP delivery.",
    images: [`${siteUrl}/social_preview.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
