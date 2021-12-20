import React, { useEffect, useState, useContext } from "react";
import { useStaticQuery, Link, graphql } from "gatsby";
import styled from "styled-components";
// import Burger from "./Burger";
// import Navigation from "./Navigation";
// import MenuContext from "./MenuContext";
// import SearchContext from "./SearchContext"
// import { HeaderStyles } from "../styles/NavStyles";

const navMenu = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Tools",
    url: "/tools",
  },
  {
    title: "ID Map",
    url: "/visualization/ID-map",
  },
  {
    title: "US Map",
    url: "/visualization/US-map",
  },
];

const HeaderStyles = styled.header`
  width: 100%;
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

const NavStyles = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  box-sizing: border-box;

  // a {
  //   font-family: sans-serif;
  //   font-size: 0.8rem;
  //   font-weight: 700;
  //   color: #fff;
  //   text-decoration: none;
  // }
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

  //   const [isOpen, setNav] = useContext(MenuContext);
  // const [isSearch, setSearch] = useContext(SearchContext)

  //   const toggleNav = () => {
  //     setNav([]);
  //   };

  return (
    // // <HeaderStyles className={scroll ? "scrolled" : null}>
    //   <div className="head-cont">
    //     {/* <Link to="/" aria-label="Homepage" onClick={toggleNav}> */}
    //     {/* <Logo /> */}
    //     {/* </Link> */}
    //     {/* <Burger /> */}
    //     Navigation
    //   </div>
    //   {/* <Navigation /> */}
    // {/* </HeaderStyles> */}
    <HeaderStyles>
      <div id="header-logo">
        <Logo />
      </div>
      <NavStyles aria-labelledby="primary-navigation">
        {navMenu.map((menuItem) => {
          return (
            <Link
              to={menuItem.url}
              key={`menuItem-${menuItem.title}`}
              className="menu-header"
              activeClassName="active"
            >
              {menuItem.title}
            </Link>
          );
        })}
      </NavStyles>
    </HeaderStyles>
  );
};

export default Header;
