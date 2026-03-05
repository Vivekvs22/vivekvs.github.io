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

export const metadata: Metadata = {
  title: "Vivek V S | Full Stack Developer",
  description:
    "Portfolio of Vivek V S, Full Stack Developer specializing in React, Next.js, Firebase, and production MVP delivery.",
  icons: {
    icon: [
      { url: `${basePath}/favicon.png`, sizes: "any" },
      { url: `${basePath}/favicon.png`, sizes: "32x32", type: "image/png" },
      { url: `${basePath}/favicon.png`, sizes: "16x16", type: "image/png" },
    ],
    apple: `${basePath}/favicon.png`,
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
