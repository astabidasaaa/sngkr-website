import React from "react";
import Header from "./Header";
import Logo from "../images/SNGKR.svg";
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Header Logo={Logo} />
      <main className="main-body">{children}</main>
      <Footer Logo={Logo} />
    </>
  );
};

export default Layout;
