import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";

import LoginModel from "./components/models/LoginModal";
import SignupModel from "./components/models/SignupModal";
import AddPropertyModal from "./components/models/AddPropertyModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Escapade",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = <p>He</p>;
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar></Navbar>
        <div className="pt-40"> {children}</div>
        <LoginModel />
        <SignupModel />
        <AddPropertyModal />
      </body>
    </html>
  );
}
