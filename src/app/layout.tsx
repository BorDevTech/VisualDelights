import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visual Delights",
  description: "Site created by BorDevTech",
};

import { Provider } from "./provider";
import { inter } from "./fonts";
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
