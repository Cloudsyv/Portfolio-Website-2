import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Izaiah Coleman",
  description: "Izaiah Coleman's Portfolio Website",
  author: "Izaiah Zakuriah Coleman",
  keywords: [
    "Izaiah Zakuriah Coleman",
    "Izaiah Coleman",
    "Izaiah",
    "Coleman",
    "Portfolio",
    "Portfolio Website",
    "Kennesaw State University",
    "Computer Science",
    "Software Engineer",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
