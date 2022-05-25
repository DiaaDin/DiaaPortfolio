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
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) =>
        open ? "translateX(100%)" : "translateX(0%)"};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Menu = ({open, setOpen}) => {
  

  return (
    <Hamburger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </Hamburger>
  );
};

export default Menu;
