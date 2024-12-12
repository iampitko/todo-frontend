import { Metadata } from "next";

import "../styles/globals.css";

import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["400", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `Todo`,
  description: `Manage your tasks efficiently with Todo App.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
