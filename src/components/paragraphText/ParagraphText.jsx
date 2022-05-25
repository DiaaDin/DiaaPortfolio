import React from "react";
import styled from "styled-components";

const P = styled.p`
  font-size: 1.6rem;
  line-height: 1.4em;
  color: var(--maincolor);

  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const ParagraphText = ({ children, ...rest }) => {
  return <P {...rest}>{children}</P>;
};

export default ParagraphText;
