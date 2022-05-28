import React from "react";
import styled from "styled-components";
import ParagraphText from "../paragraphText/ParagraphText";
import SectionTitle from "../titles/SectionTitle";
import { motion } from "framer-motion";

const Div = styled.div`
  max-width: 550px;
  .PText1 {
    margin-bottom: 1rem;
  }
  .PText {
    line-height: 4rem;
    font-size: 2rem;
    font-weight: 500;
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .PText {
      margin-bottom: 3rem;
      line-height: 3rem;
    }
  }
`;

const Info = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Div className="info">
      <ParagraphText className="PText1">Let Me Introduce Myself</ParagraphText>
      <SectionTitle>About Me</SectionTitle>
      <ParagraphText className="PText">
        I'm Web Developer From Egypt. I Create Professional Websites. I Love Art
        And Always Try To Show Unique Views To The Addience Through My Design.
      </ParagraphText>
    </Div>
  </motion.div>
);

export default Info;
