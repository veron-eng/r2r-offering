import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "R2R Websites | Professional Websites for Rent-to-Rent Landlords",
  description: "Create a professional website for your rent-to-rent property business with our built-in CMS, SEO blog, and admin dashboard.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="cupcake" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
