import React from "react";
import styled from "styled-components";

const A = styled.a`
  display: inline-block;
  background-color: Transparent;
  padding: 0.5rem 1.7rem;
  color: #eeeeee;
  font-size: 2rem;
  text-transform: capitalize;
  font-weight: 400;
  cursor: pointer;
  position: relative;
  z-index: 1;
  &::before {
    transition: all 0.3s ease-in-out;
    content: "";
    z-index: -1;
    position: absolute;
    left: 0;
    top: 0;
    width: 0%;
    height: 100%;
  }
  &:hover::before {
    width: 100%;
    background-color: var(--maincolor);
  }
  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
    padding: 0.5rem 1.7rem;
  }
`;

const PrimaryButton = ({ children, buttonType, ...rest }) => {
  return (
    <A {...rest} as={buttonType}>
      {children}
    </A>
  );
};

export default PrimaryButton;
