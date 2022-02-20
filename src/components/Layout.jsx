import React from "react";
import Header from "./Header";
import Logo from "../images/SNGKR.svg";
import GlobalStyles from "../styles/GlobalStyles";
import Typography from "../styles/Typography";
import Footer from "./Footer";
import { motion, AnimatePresence } from "framer-motion";
import { menuTools, menuVisualization } from "../constants/subMenuConstant";
import Transition from "./Transition";

const Layout = (props) => {
  const keyLocation = props.location.pathname.split("/")[1];

  const subMenuFunction = () => {
    switch (keyLocation.toString()) {
      case "tools":
        return menuTools;
      case "visualization":
        return menuVisualization;
      default:
        return false;
    }
  };

  return (
    <>
      <GlobalStyles />
      <Typography />
      <Header Logo={Logo} />
      <AnimatePresence exitBeforeEnter>
        <motion.main
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 500 }}
          transition={{
            type: "spring",
            duration: 0.8,
          }}
          className="main-body"
          key={`main-${keyLocation}`}
        >
          <Transition subMenu={subMenuFunction()} props={props} />
        </motion.main>
      </AnimatePresence>
      <Footer Logo={Logo} />
    </>
  );
};

export default Layout;
