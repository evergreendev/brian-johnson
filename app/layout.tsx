import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Footer from "@/app/components/Footer";
import Nav from "@/app/components/Nav";

export const metadata: Metadata = {
  title: "Vote Voight",
  description: "Curt Voight for Senate 33",
};

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
    <html lang="en" className={`${glacialIndifference.variable} ${sportsWorld.variable}`}>
      <body>
      <Nav/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}
