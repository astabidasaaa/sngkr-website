import { Link } from "gatsby";
import React, { useContext } from "react";
import styled from "styled-components";
import MenuContext from "./MenuContext";

const NavStyles = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  box-sizing: border-box;

  @media (max-width: 576px) {
    z-index: 9;
    position: fixed;
    right: 0;
    top: 40px;
    width 50%;
    flex-flow: column nowrap;
    align-items: flex-end;
    justify-content: center;
    gap: 1.5rem;
    padding: 1.5rem 2rem;
    border-radius: 1rem 0 0 1rem;
    overflow: hidden;
    background: linear-gradient(
      135deg,
      rgba(246, 201, 14, 1) 0%,
      rgba(220, 120, 48, 1) 48%,
      rgba(213, 97, 57, 1) 68%,
      rgba(202, 62, 71, 1) 100%
    );
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;

    &.open {
      transform: translateX(0%);
    }

    a {
        width: 50%;
        text-align: right;
    }
  }
`;

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
    title: "Visualization",
    url: "/visualization",
  },
];

const Navigation = () => {
  const [isOpen, setNav] = useContext(MenuContext);

  const toggleNav = () => {
    setNav([]);
  };

  return (
    <NavStyles
      aria-labelledby="primary-navigation"
      className={isOpen ? "open" : "closed"}
    >
      {navMenu.map((menuItem) => {
        return (
          <Link
            to={menuItem.url}
            key={`menuItem-${menuItem.title}`}
            className="menu-header"
            activeClassName="active"
            partiallyActive={menuItem.title !== "Home"}
            onClick={toggleNav}
          >
            {menuItem.title}
          </Link>
        );
      })}
    </NavStyles>
  );
};

export default Navigation;
