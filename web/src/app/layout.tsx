import type { Metadata } from "next";
import localFont from "next/font/local";
import { Archivo_Black, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const googleSans = localFont({
  src: "../../public/fonts/GoogleSans.woff2",
  variable: "--font-google-sans",
  display: "swap",
  weight: "100 900",
  preload: true,
});

const archivo = Archivo_Black({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  preload: true,
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Sisyphus — Modern Social-First Creative Agency",
  description: "Good stories move mountains. Modern and suitable for a social-first creative agency.",
};

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${googleSans.variable} ${archivo.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#197A50] text-white overflow-x-hidden selection:bg-[#20ff92] selection:text-black">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}


