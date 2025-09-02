import type { Metadata } from "next";
import { Inter, Barlow } from "next/font/google";
import "./globals.css";
// Theme provider 
import { ThemeProvider } from "next-themes";

const inter = Inter({ subsets: ["latin"] });
const barlowFont = Barlow({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-barlow" });
export const metadata: Metadata = {
  title: "GoShop - Multi Vendor Ecommerce",
  description: "A multi vendor ecommerce platform built with Next.js and TypeScript",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${barlowFont.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}