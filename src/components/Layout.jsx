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

// gatsby-browser.js

// import CustomLayout from "./src/gatsby/browser/wrapPageElement";
// export const wrapPageElement = CustomLayout;

// wrapPageElement.js

// const CustomLayout = ({ element, props }, pluginOptions) => {
//   return <Layout {...props}>{element}</Layout>;
// };

// Layout.js

{
  /* <>
  <Header siteTitle={data.site.siteMetadata.title} />
  <Transition {...props}>
    <Container p="4" key={"container-" + props.location.pathname}>
      <main>{props.children}</main>
    </Container>
  </Transition>
  <Footer />
</>; */
}

// Transition.js

{
  /* <AnimatePresence>
  <motion.div
    key={location.pathname}
    variants={variants}
    initial="initial"
    animate="enter"
    exit="exit"
  >
    {children}
  </motion.div>
</AnimatePresence>; */
}
