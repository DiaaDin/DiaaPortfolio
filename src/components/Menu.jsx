import React from "react";
import styled from "styled-components";

const Hamburger = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  z-index: 10000000001;
  div {
    height: 0.3rem;
    width: 100%;
    border-radius: 10px;
    background-color: var(--seccolor);
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ isOpen }) =>
        isOpen ? "translateX(100%)" : "translateX(0%)"};
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Menu = ({isOpen,toggle}) => {
  

  return (
    <Hamburger isOpen={isOpen} onClick={toggle}>
      <div />
      <div />
      <div />
    </Hamburger>
  );
};

export default Menu;
