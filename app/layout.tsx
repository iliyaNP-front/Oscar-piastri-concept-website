import type { Metadata } from "next";
import { Zen_Dots, Inter, Jersey_10, Oxanium } from "next/font/google";
import "./globals.css";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import "../component/component.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const oxanium = Oxanium({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-oxanium",
});

const jersey = Jersey_10({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-jersey",
  display: "swap",
});

const zenDots = Zen_Dots({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-zen",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oscar Piastri",
  description: "Formula 1 Driver",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${inter.variable} ${zenDots.variable} ${jersey.variable} ${oxanium.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
