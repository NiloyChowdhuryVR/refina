import type { Metadata } from "next";
import { Geist, Geist_Mono,Bebas_Neue, Roboto } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebas = Bebas_Neue({
  weight: "400", // Bebas Neue only has one weight
  subsets: ["latin"],
  variable: "--font-bebas", // for Tailwind utility
});

const roboto = Roboto({
  weight: ["400", "500", "700"], // normal, medium, bold
  subsets: ["latin"],
  variable: "--font-roboto",
});


export const metadata: Metadata = {
  title: "Refina",
  description: "Refine your images for ecommerce ready product!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>

    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${bebas.variable} antialiased`}
        >
          <Toaster position="top-center" reverseOrder={false} /> 
          <Navbar/>
        {children}
      </body>
    </html>
        </ClerkProvider>
  );
}
