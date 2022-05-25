import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 4rem;
  font-weight: 800;
  color: ${({ theme }) => theme.light};
  text-transform: capitalize;
  @media only screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

const SectionTitle = ({ children, ...rest }) => {
  return <Title {...rest}>{children}</Title>;
};

export default SectionTitle;
