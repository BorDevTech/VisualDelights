import type { Metadata } from "next";

import { Inter } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Visual Delights",
  description: "Site created by BorDevTech",
};

import { Provider } from "./provider";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
