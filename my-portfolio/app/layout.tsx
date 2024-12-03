import type { Metadata } from "next";
//import localFont from "next/font/local";
import "./globals.css";



export const metadata: Metadata = {
  title: "My Portfolio",
  description: "My Portfolio as a software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`$antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
