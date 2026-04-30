import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pritech Engineering",
  description:
    "Special purpose machines, testing systems, fixtures, and precision engineering solutions from Chennai.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
