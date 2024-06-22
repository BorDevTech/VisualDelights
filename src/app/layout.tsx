import { Metadata } from "next";
import { Provider } from "./provider";
import { inter } from "./fonts";
import { ColorModeScript, theme } from "@chakra-ui/react";
import ClarityAnalytics from "./clarity";
import GoogleAnalytics from "./googleAnalytics";
import { GoogleTagManager } from "@next/third-parties/google";
import Head from "next/head";

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
      <Head>
        <meta
          name="google-site-verification"
          content="YTF_mPpBAm2hGN6VZvdSSKwEuUpjbGQHVv-3gguO9Eo"
        />
      </Head>
      <body
      // className={inter.className}
      >
        <GoogleTagManager gtmId="GTM-TNMZ283Q" />
        <GoogleAnalytics GoogleTrackingID="G-16SCX6MGYD" />
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=GTM-TNMZ283Q`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
        <ClarityAnalytics ClarityTrackingID={"mupdzb93g6"} />
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
