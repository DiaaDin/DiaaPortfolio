import React from "react";
import SectionTitle from "../titles/SectionTitle";
import styled from "styled-components";
import { motion } from "framer-motion";

const SkillsContainer = styled.div`
  width: 70%;
  max-width: 550px;
  

  .skillname {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--maincolor);
    margin: 1.5rem 0;
  }
  

  .skill-bar {
    height: 2rem;
    background-color: #22577e;
    border-radius: 5px;
  }

  .skillper {
    max-width: 95%;
    height: 2rem;
    background-color: var(--maincolor);
    position: relative;
    border-radius: 5px;
    animation: fillbar 1.7s;

    &::before {
      content: attr(per);
      position: absolute;
      color: var(--seccolor);
      background-color: var(--maincolor);
      right: 0;
      top: -29px;
      font-size: 1.5rem;
      padding: 4px 5px;
      border-radius: 6px;
      transform: translate(50%);
    }
  }
  @keyframes fillbar {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
  @media only screen and (max-width: 768px) {
    width: 90%;
    .skillname{
      font-size: 1.5rem;
    }
    .skillper{
      &::before {
     
      font-size: 1rem;
    
    }
    }
  }
`;

const SkillsWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
`;

const Skills = () => {
  return (
    <SkillsContainer className="skills">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <SectionTitle>Skills</SectionTitle>
        <SkillsWrapper>
          <div className="skill">
            <div className="skillname">HTML</div>
            <div className="skill-bar">
              <div
                className="skillper"
                per="95%"
                style={{ maxWidth: "95%" }}
              ></div>
            </div>
          </div>

          <div className="skill">
            <div className="skillname">CSS / SASS</div>
            <div className="skill-bar">
              <div
                className="skillper"
                per="90%"
                style={{ maxWidth: "90%" }}
              ></div>
            </div>
          </div>

          <div className="skill">
            <div className="skillname">JAVA SCRIPT</div>
            <div className="skill-bar">
              <div
                className="skillper"
                per="85%"
                style={{ maxWidth: "85%" }}
              ></div>
            </div>
          </div>
          <div className="skill">
            <div className="skillname">BOOTSTRAP</div>
            <div className="skill-bar">
              <div
                className="skillper"
                per="80%"
                style={{ maxWidth: "80%" }}
              ></div>
            </div>
          </div>
          <div className="skill">
            <div className="skillname">REACT JS</div>
            <div className="skill-bar">
              <div
                className="skillper"
                per="90%"
                style={{ maxWidth: "90%" }}
              ></div>
            </div>
          </div>
        </SkillsWrapper>
      </motion.div>
    </SkillsContainer>
  );
};

export default Skills;
