import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yassmine Brahem | Software Engineering Apprentice",
  description: "Portfolio of Yassmine Brahem, a Master's Student in Distributed Systems seeking an apprenticeship in France.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground selection:bg-accent selection:text-white">
        {children}
      </body>
    </html>
  );
}
