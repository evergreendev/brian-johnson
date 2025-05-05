import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Footer from "@/app/components/Footer";
import Nav from "@/app/components/Nav";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

export const metadata: Metadata = {
  title: "Brian Johnson for Area 6 School Board",
  description: "Restore excellence in our schools, craft a solid educational foundation that will endure for generations, and create a school system that prepares every child for success.",
};


import {EB_Garamond} from 'next/font/google';

const ebGaramond = EB_Garamond({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-garamond",
})

const glacialIndifference = localFont({
  src: "./fonts/GlacialIndifference-Bold.woff2",
  display: "swap",
  variable: "--font-glacial-indifference",
});

const sportsWorld = localFont({
  src: "./fonts/SportsWorld.woff2",
  display: "swap",
  variable: "--font-sports-world",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${glacialIndifference.variable} ${sportsWorld.variable} ${ebGaramond.variable}`}>
    <GoogleTagManager gtmId="GTM-K693WR2J" />
    <GoogleAnalytics gaId="G-W1NFQ74DWP"/>
      <body>
      <Nav/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}
