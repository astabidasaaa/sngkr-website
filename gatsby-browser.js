import React from "react";
import Layout from "./src/components/Layout";
import { MenuProvider } from "./src/components/MenuContext";

// export function onRouteUpdate({ location, prevLocation }) {
//   console.log("new pathname", location.pathname);
//   console.log("old pathname", prevLocation ? prevLocation.pathname : null);
// }

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

export function wrapRootElement({ element }) {
  return <MenuProvider>{element}</MenuProvider>;
}
