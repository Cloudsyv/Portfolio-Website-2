import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Background from "@/components/Background";

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
      <body className="font-mono bg-(--dark-bg) text-white antialiased">
        <Background />

        <div className="relative z-20 flex justify-center mt-8">
          <div className="w-full max-w-225 px-8">
            <Navbar />
          </div>
        </div>

        <main className="relative z-10 flex flex-col items-center">
          <div className="w-full max-w-225 px-8">{children}</div>
        </main>

        <Footer />
      </body>
    </html>
  );
}
