import type { Metadata } from "next";
import { El_Messiri, Montserrat } from "next/font/google";
import "./globals.css";

const elMessiri = El_Messiri({
  subsets: ["arabic"],
  variable: "--font-elmessiri",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beauty App",
  description: "beauty app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${elMessiri.variable} ${montserrat.variable} font-montserrat antialiased min-h-screen bg-gradient-to-b from-purple-50 to-stone-50`}
      >
        {children}
      </body>
    </html>
  );
}
