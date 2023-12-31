import Header from "@/components/Header";
import Banner from "@/components/Banner";
import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Blog",
  description: "Next.js Blog with Sanity V3",
};

// inter.className;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="mx-w-7xl mx-auto">
        {/* Header */}
        <Header />

        {/* Banner */}
        <Banner />

        {/* Main */}
        {children}
      </body>
    </html>
  );
}
