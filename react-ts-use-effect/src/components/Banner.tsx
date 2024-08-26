import { ReactElement, useEffect } from "react";

export function Banner(): ReactElement {
  // useEffect(() => {
  //   console.log("Banner component rendered first time");
  // }, []);

  // This useEffect runs all the time. On the first render and on everything. Every useState update, every prop update and also if a parent component is update.
  // useEffect(() => {
  //   console.log("Banner rendered");
  // });

  return <div className="banner">This is a Banner</div>;
}
