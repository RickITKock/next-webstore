import { Nav, NavLink } from "@/components/Nav";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav>
          <NavLink href={"/"}>Home</NavLink>
          <NavLink href={"/catalog"}>Catalog</NavLink>
          <NavLink href={"/blog"}>Blog</NavLink>
          <NavLink href={"/about"}>About us</NavLink>
          <NavLink href={"/contact"}>Contact</NavLink>
        </Nav>
        {children}
        <footer className="bg-stone-800 text-stone-50 p-4">
          This is the footer
        </footer>
      </body>
    </html>
  );
}
