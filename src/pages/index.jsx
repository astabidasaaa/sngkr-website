import * as React from "react";
import TypeWriterEffect from "react-typewriter-effect";
import styled from "styled-components";
import useIsSsr from "../components/IsSSR";

const WelcomeTextStyle = styled.section`
  width: fit-content;
  padding: 6rem 0;
  margin: auto;

  #home-placeholder {
    // color: var(--black);
    opacity: 0;
  }
`;

const IndexPage = () => {
  const isSSR = useIsSsr();
  return (
    <>
      <WelcomeTextStyle>
        {isSSR ? (
          <h1 id="home-placeholder">
            Hello world! I am Sangkara Welcome to my portfolio website. Fonts
            can be customized. Feel free to take a look!
          </h1>
        ) : (
          <TypeWriterEffect
            startDelay={1000}
            cursorColor="white"
            multiText={[
              "Hello world!",
              "I am Sangkara.",
              "Welcome to my portfolio website.",
              "Fonts can be customized.",
              "Feel free to take a look!",
            ]}
            multiTextDelay={1000}
            typeSpeed={120}
          />
        )}
      </WelcomeTextStyle>
    </>
  );
};

export default IndexPage;
