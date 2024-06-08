import type { Metadata } from "next";
import icon from "@/app/visualDelights.png";

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
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
