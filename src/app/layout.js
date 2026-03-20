import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/page.js";
import Footer from "./components/footer/page.js"

export const metadata = {
  title: "SCS Wellness Workshop 2026",
  description: "Wellness Workshop by Student Counselling Services, IIT (BHU)",
  icons: {
    icon: "/favicon.ico",        // your favicon file
    apple: "/favicon.ico",       // for iOS home screen
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
