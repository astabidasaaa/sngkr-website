import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import SubMenu from "./SubMenu";

const Transition = ({ subMenu, props }) => {
  return subMenu ? (
    <>
      <SubMenu subMenu={subMenu} />
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
          key={`main-${props.location.pathname}`}
        >
          {props.children}
        </motion.main>
      </AnimatePresence>
    </>
  ) : (
    props.children
  );
};

export default Transition;
