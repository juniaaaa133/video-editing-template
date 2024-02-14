import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Head from "next/head";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Williams",
  description: "Video Editing Web | ICONIC",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >

      <body className={inter.className}>
        <Nav />
        {children}
        <Footer />
        </body>
    </html>
  );
}
