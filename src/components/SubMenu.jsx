import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const ToolsMenuStyle = styled.nav`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem 1rem;
  box-sizing: border-box;
`;

const SubMenu = ({ subMenu }) => {
  return (
    <ToolsMenuStyle aria-labelledby="tools-page-navigation">
      {subMenu?.map((menuItem) => {
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

export default SubMenu;
