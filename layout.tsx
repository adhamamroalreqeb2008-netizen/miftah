import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MIFTAH — Your life, organized",
  description: "A calmer, smarter way to organize your important documents and never miss a deadline."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}