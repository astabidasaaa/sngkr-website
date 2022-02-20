import React, { useEffect } from "react";
// import TypeWriterEffect from "react-typewriter-effect";
import styled from "styled-components";
import useIsSsr from "../components/IsSSR";
import Typed from "typed.js";

const WelcomeTextStyle = styled.div`
  width: 100%;
  padding: 6rem 0;
  margin: auto;

  #home-placeholder {
    color: var(--black);
    font-size: var(--h6);
  }

  span {
    font-size: var(--h1);
    font: var(--regularWeight) clamp(2rem, 1rem + 5vw, 5.5rem) var(--sansSerif);
    color: var(--white);
  }
`;

const IndexPage = () => {
  const isSSR = useIsSsr();

  useEffect(() => {
    const typed = new Typed(".typed1", {
      strings: [
        "Hello wprdl",
        "Hello world!",
        "Hello world!",
        "Hello world!",
        "I am <strong>Sangkara</strong>.",
        "I am <strong>Sangkara</strong>.",
        "I am <strong>Sangkara</strong>.",
        "Welcime",
        "Welcome ot",
        "Welcome to my portfolio weebsi",
        "Welcome to my portfolio website.",
        "Welcome to my portfolio website.",
        "Welcome to my portfolio website.",
        "Sorry, this sot",
        "Sorry, this site is still under development.",
        "Sorry, this site is still under development.",
        "But dont",
        "But don't worry,",
        "But don't worry,",
        "You can still access it.",
        "You can still access it.",
        "Feel hap",
        "Feel free ot ta",
        "Feel free to take a look!",
        "Feel free to take a look!",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 100,
      cursorChar: "|",
      smartBackspace: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, [isSSR]);

  if (isSSR)
    return (
      <WelcomeTextStyle>
        <h1 id="home-placeholder">
          Hello world! I am Sangkara Welcome to my portfolio website. Fonts can
          be customized. Feel free to take a look!
        </h1>
        <span className="typed1"></span>
      </WelcomeTextStyle>
    );
  return (
    <WelcomeTextStyle>
      <span className="typed1"></span>
    </WelcomeTextStyle>
  );
};

export default IndexPage;
