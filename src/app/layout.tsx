import { Metadata } from "next";
import { Provider } from "./provider";
import { inter } from "./fonts";
import { ColorModeScript, theme } from "@chakra-ui/react";
import ClarityAnalytics from "./clarity";

export const metadata: Metadata = {
  title: { template: "Visual Delights | %s", default: `Visual Delights` },
  description: "Site created by BorDevTech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      // className={inter.className}
      >
        <ClarityAnalytics ClarityTrackingID="mupdzb93g6" />
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
