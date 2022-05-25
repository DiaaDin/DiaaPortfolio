import React from "react";
import styled from "styled-components";
import SectionTitle from "../titles/SectionTitle";
import PrimaryButton from "../buttons/PrimaryButton";
import ProjectsData from "./ProjectsData";

const Section = styled.section`
  min-height: 100vh;
  padding: 10rem 0;

  .Stitle {
    text-align: center;
    margin-bottom: 5rem;
  }
  .container {
    display: flex;
    align-items: center;
    flex-direction: column;
    .boxcontainer {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 2rem;
    }
    .btn {
      margin-top: 5rem;
      color: #dddddd;
      transition: color 0.3s ease-in-out;
      background-color: #4887df;
    }
  }
`;
const Links = styled.div`
  width: 100%;
  height: 20%;
  bottom: -100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  transition: bottom 0.3s ease-in-out;
`;
const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  transition: opacity 0.3s ease-in-out;
  position: relative;
  div {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 0;
    display: none;
    transition: all 0.3s ease-in-out;
  }
`;
const Img = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: top;

  @keyframes topbot {
    from {
      object-position: top;
    }
    to {
      object-position: bottom;
    }
  }
`;
const Box = styled.div`
  width: 250px;
  height: 350px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  box-shadow: 0px 0px 31px -16px rgba(0, 0, 0, 0.63);
  &:hover div {
    display: block;
  }
  @media only screen and (max-width: 768px) {
    width: 200px;
    height: 300px;
  }
  &:hover ${Links} {
    bottom: 0;
  }

  &:hover ${Img} {
    animation: topbot 4s forwards;
  }
`;

const Projects = () => {
  return (
    <Section id="Portfolio">
      <SectionTitle className="Stitle">Portfolio</SectionTitle>
      <div className="container">
        <div className="boxcontainer">
          {ProjectsData.map((project, index) => {
            return (
              <Box key={index}>
                <ImgContainer>
                  <div></div>
                  <Img src={project.img} />
                </ImgContainer>
                <Links>
                  <PrimaryButton href={project.view} target="_blank">
                    View
                  </PrimaryButton>
                  <PrimaryButton href={project.source} target="_blank">
                    Source
                  </PrimaryButton>
                </Links>
              </Box>
            );
          })}
        </div>
        <PrimaryButton
          className="btn"
          href="https://github.com/DiaaDin?tab=repositories"
          target="_blank"
        >
          My All Works
        </PrimaryButton>
      </div>
    </Section>
  );
};

export default Projects;
