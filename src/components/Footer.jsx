import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const FooterStyle = styled.footer`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: center;
  box-sizing: border-box;
  padding: 1.5rem 1.5rem 0.7rem;
  // background-color: var(--white);
  gap: 2rem;

  @media screen and (max-width: 576px) {
    align-items: center;
    justify-content: center;
  }

  svg {
    path {
      fill: var(--white);
    }
  }

  nav#footer-navigation {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    justify-content: space-between;

    @media screen and (max-width: 576px) {
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
    }

    div.menu {
      display: flex;
      flex-flow: column nowrap;
      align-items: flex-start;
      justify-content: flex-start;

      @media screen and (max-width: 576px) {
        align-items: center;
        justify-content: center;
      }

      p {
        // color: var(--black);
        font-weight: var(--heavyWeight);
      }

      ul {
        display: flex;
        flex-flow: row nowrap;
        align-items: flex-start;
        justify-content: flex-start;
        list-style: none;
        gap: 1rem;
        padding: 0;
        margin: 0;

        li {
          &:not(:last-child) {
            margin-bottom: 0.5rem;
          }

          @media screen and (max-width: 576px) {
            display: flex;
            flex-flow: column nowrap;
            align-items: center;
            justify-content: center;
          }

          p {
            &.text-footer {
              font-size: var(--subPara);
              font-family: var(--sansSerif);
              font-weight: var(--regularWeight);
              color: var(--white);
              text-decoration: none;
              margin: 0;
            }
          }

          a {
            &.menu-footer {
              font-size: var(--subPara);
              font-family: var(--sansSerif);
              font-weight: var(--boldWeight);
              color: var(--white);
              text-decoration: none;
            }
          }
        }
      }
    }
  }
`;

const Footer = ({ Logo }) => {
  return (
    <FooterStyle>
      <Logo />
      <nav aria-labelledby="footer-navigation" id="footer-navigation">
        <div className="menu left">
          <ul>
            <li>
              <Link className="menu-footer" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="menu-footer" to="/tools">
                Tools
              </Link>
            </li>
            <li>
              <Link className="menu-footer" to="/visualization">
                Visualization
              </Link>
            </li>
          </ul>
        </div>
        <div className="menu right">
          <ul>
            <li>
              <a
                className="menu-footer"
                href="https://www.instagram.com/astabidasaaa/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                className="menu-footer"
                href="https://github.com/astabidasaaa"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </FooterStyle>
  );
};

export default Footer;
