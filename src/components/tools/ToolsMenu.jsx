import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const menuTools = [
  {
    title: "Tools",
    url: "/tools",
  },
  {
    title: "Calculator",
    url: "/tools/calculator",
  },
  {
    title: "Timer",
    url: "/tools/timer",
  },
  {
    title: "Drum Machine",
    url: "/tools/drum-machine",
  },
  {
    title: "To Do List",
    url: "/tools/to-do-list",
  },
];

const ToolsMenuStyle = styled.nav`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem 1rem;
  box-sizing: border-box;
  //   position: absolute;
  //   top: 0;
  //   right: 0;
`;

const ToolsMenu = () => {
  return (
    <ToolsMenuStyle aria-labelledby="tools-page-navigation">
      {menuTools.map((menuItem) => {
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
    </ToolsMenuStyle>
  );
};

export default ToolsMenu;
