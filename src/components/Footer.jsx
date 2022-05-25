import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  text-align: center;
  margin: 5rem 0 0 0;
`;

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1200px;
  padding: 1rem 0;
`;

const Text = styled.h2`
  color: var(--maincolor);
  letter-spacing: 1px;
  font-size: 2rem;
  font-weight: 500;
  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
    letter-spacing: 0;
  }
`;

const Footer = () => {
  return (
    <FooterContainer data-scroll-section>
      <Wrapper>
        <Text>All Copy Right Reversed &copy; Diaa Zahran 2022 </Text>
      </Wrapper>
    </FooterContainer>
  );
};

export default Footer;
