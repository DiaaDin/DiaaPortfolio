import React from "react";
import ParagraphText from "../paragraphText/ParagraphText";
import SectionTitle from "../titles/SectionTitle";
import { BsFillCircleFill } from "react-icons/bs";
import styled from "styled-components";
import { motion } from "framer-motion";

const Div = styled.div`
  max-width: 550px;
  .PPText {
    margin-bottom: 1rem;
    font-weight: 500;
    font-size: 2rem;
  }
  .hire {
    font-size: 1.7rem;
    font-weight: 500;
    color: #0fcf2f;
  }
`;

const Circle = styled(BsFillCircleFill)`
  height: 9px;
  width: 9px;
`;
const Personal = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Div className="personal">
      <SectionTitle>Personal Information</SectionTitle>
      <ParagraphText className="PPText">
        Name : DiaaEl-din AbdelKhalik Khalil Zahran
      </ParagraphText>
      <ParagraphText className="PPText">Age : 23</ParagraphText>
      <ParagraphText className="PPText">Phone : +20 101 318 6038</ParagraphText>
      <ParagraphText className="PPText">
        Address : Mansoura / Cairo
      </ParagraphText>
      <ParagraphText className="PPText">
        Email : DiaaDinZahran@gmail.com
      </ParagraphText>
      <ParagraphText className="hire">
        <Circle /> Available for hire
      </ParagraphText>
    </Div>
  </motion.div>
);

export default Personal;
