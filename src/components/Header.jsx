import React, { useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Navigation from "./Navigation";
import BurgerButton from "./BurgerButton";
import MenuContext from "./MenuContext";

const HeaderStyles = styled.header`
  width: 100%;
  position: sticky;
  z-index: 999;
  left: 0;
  top: 0;
  background-color: var(--black);
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0.7rem 1.5rem;

  svg {
    height: 1rem;

    path {
      fill: var(--white);
    }
  }
`;

const Header = ({ Logo }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  //   const [scroll, setScroll] = useState(false);

  //   useEffect(() => {
  //     window.addEventListener("scroll", () => {
  //       setScroll(window.scrollY > 23);
  //     });
  //     return () => setScroll(false);
  //   }, []);

  const [isOpen, setNav] = useContext(MenuContext);

  const toggleNav = () => {
    setNav([]);
  };

  return (
    <HeaderStyles>
      <div id="header-logo">
        <Logo />
      </div>
      <BurgerButton />
      <Navigation />
    </HeaderStyles>
  );
};

export default Header;
