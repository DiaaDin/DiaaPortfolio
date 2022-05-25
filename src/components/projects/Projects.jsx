import styled from "styled-components";
import SectionTitle from "../titles/SectionTitle";
import PrimaryButton from "../buttons/PrimaryButton";
import ProjectsData from "./ProjectsData";

const Section = styled.section`
  background-color: var(--seccolor);
  padding: 10vh 0;
  overflow: hidden;
  .MainTitle {
    text-align: center;
  }

  .container {
    display: flex;
    padding: 5rem 0 0 0;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    
  }
`;
const Content = styled.div`
  position: absolute;
  bottom: -100%;
  right: 0;
  left: 0;
  height: 7rem;
  transition: bottom 0.4s ease-in-out;
  background-color: rgba(0, 0, 0, 0.7);
  a {
    font-size: 1.8rem;
    line-height: 2rem;
    margin: 2rem;
  }
`;
const Box = styled.div`
  height: 35rem;
  width: 25rem;
  text-align: center;
  margin: 2rem;
  border-radius: 0.5rem;
  position: relative;
  overflow: hidden;
  box-shadow: 2px 1px 4px 1px rgba(0, 0, 0, 0.11);
  img {
    width: 100%;
    object-fit: cover;
    object-position: top;
    transition: object-position 1.5s ease-in-out;
    &:hover {
      object-position: bottom;
    }
  }
  &:hover ${Content} {
    bottom: 0;
  }
  @media only screen and (max-width: 768px) {
    height: 30rem;
  width: 20rem;
          }
`;

const Projects = () => {
  return (
    <Section id="Portfolio">
      <SectionTitle className="MainTitle">Portfolio</SectionTitle>
      <div className="container">
        {ProjectsData.map((project, index) => {
          return (
            <Box key={index}>
              <img src={project.img} alt={project.title} />

              <Content>
                <PrimaryButton href={project.view} target="_blank">
                  View
                </PrimaryButton>
                <PrimaryButton href={project.view} target="_blank">
                  Source
                </PrimaryButton>
              </Content>
            </Box>
          );
        })}
      </div>
    </Section>
  );
};

export default Projects;
