import React from "react";
import Info from "./Info";
import styled from "styled-components";
import Skills from "./Skills";
import Personal from "./Personal";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";



const Section = styled.section`
  
  .container {
    min-height: 50vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`;

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 50px;
  background-color: var(--maincolor);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  margin-bottom: 5rem;
  @media only screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;
const Links = styled.ul``;

const LinkItem = styled(NavLink)`
  margin: 0 1.5rem;
  font-size: 2rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  transition: opacity 0.3s ease;
  color: var(--linkcolor);
  @media only screen and (max-width: 768px) {
    margin: 0 .5rem;
    padding:  0.5rem;
    font-size: 1.8rem;
  }
  &:hover {
    opacity: 0.7;
  }
  &.active {
    color: var(--maincolor);
    background-color: var(--linkcolor);
    border-radius: 1rem;
  }
`;

const About = () => {
  return (
    <Router>
      <Section id="About">
        <Nav>
          <Links>
            <LinkItem to="/DiaaPortfolio">About Me</LinkItem>
            <LinkItem to="/Personal">Personal Information</LinkItem>
            <LinkItem to="/Skills">Skills</LinkItem>
          </Links>
        </Nav>
        <div className="container">
          <AnimatePresence exitBeforeEnter>
            <Routes>
              <Route path="/DiaaPortfolio" element={<Info />} />
              <Route path="/Personal" element={<Personal />} />
              <Route path="/Skills" element={<Skills />} />
            </Routes>
          </AnimatePresence>
        </div>
      </Section>
    </Router>
  );
};

export default About;
