import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

const poppins  = Poppins({ 
  subsets: ["latin"],
  weight:['100','200','300','400','500','600','700','800','900'
  ]

 });

export const metadata: Metadata = {
  title: "Nft next.js shop",
  description: "Nft website template using next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ResponsiveNav/>
        {children}
        </body>
    </html>
  );
}
