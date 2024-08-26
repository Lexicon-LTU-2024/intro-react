import { ReactElement, useEffect } from "react";

export function ConditionalBanner(): ReactElement {
  // This useEffect runs whenever the component is removed by React.
  // useEffect(() => {
  //   return () => {
  //     console.log("ConditionalBanner has been removed");
  //   };
  // });

  return (
    <div className="conditional-banner">
      This is a conditional banner that is controlled from App
    </div>
  );
}
