import React, { useContext } from "react";
import styled from "styled-components";
import MenuContext from "./MenuContext";

const BurgerStyles = styled.button`
  border: none;
  background-color: transparent;
  font-family: var(--sansSerif);
  color: var(--white);
  display: flex;
  align-items: center;
  padding: 0;
  z-index: 3;
  font-size: 1.15rem;

  > div {
    span {
      display: block;
      background-color: var(--white);
      transition: width 0.2s ease;
      width: 30px;
      height: 3px;
      border-radius: 2px;
      &:nth-child(1) {
        transform: translateY(0px);
        margin-bottom: 6px;
      }
      &:nth-child(3) {
        transform: translateY(0px);
        margin-top: 6px;
      }
    }
  }

  &.open {
    > div {
      span {
        &:nth-child(2) {
          width: 20px;
        }
        &:nth-child(3) {
          width: 10px;
        }
      }
    }
  }

  @media (min-width: 577px) {
    display: none;
  }

  &:focus-visible {
    border: none;
    outline: 2px solid var(--white);
    outline-offset: 5px;
  }
`;

const BurgerButton = () => {
  const [isOpen, setNav] = useContext(MenuContext);

  const toggleNav = () => {
    setNav((isOpen) => !isOpen);
  };

  return (
    <BurgerStyles
      onClick={toggleNav}
      type="button"
      className={isOpen ? "open" : "closed"}
      aria-label="Menu button"
    >
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </BurgerStyles>
  );
};

export default BurgerButton;
