import Script from "next/script";
import React from "react";
interface GAnalyticsRequirements {
  GoogleTrackingID: string;
}
const GoogleAnalytics = ({ GoogleTrackingID }: GAnalyticsRequirements) => {
  return (
    <>
      <Script
        id="Google-TagSRC"
        src={`https://www.googletagmanager.com/gtag/js?id=${GoogleTrackingID}`}
      ></Script>
      <Script id="Google-TagID">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', '${GoogleTrackingID}'); `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
