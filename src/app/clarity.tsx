import Script from "next/script";
import React from "react";

const clarityId = "mupdzb93g6";
interface ClarityRequirements {
  ClarityTrackingID: string;
}

const ClarityAnalytics = ({ ClarityTrackingID }: ClarityRequirements) => {
  return (
    <>
      <Script id="clarityTracking">
        {` (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};

              t=l.createElement(r);
              t.async=1;
              t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];
              y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script",  ClarityTrackingID ); `}
      </Script>
    </>
  );
};

export default ClarityAnalytics;
