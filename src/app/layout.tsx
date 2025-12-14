import type { Metadata } from "next";
// Update the import path if Header is located elsewhere, for example:
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";
export const metadata: Metadata = {
  title: "My Website",  
  description: "A Next.js app with reusable components",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
