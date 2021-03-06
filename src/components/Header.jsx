import React, { useState } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import Menu from "./Menu";
import { motion } from "framer-motion";

const MainHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: transparent;
  display: flex;
  align-items: center;
  z-index: 10;
  transition: top 0.3s ease-in-out;
  &.active {
    box-shadow: 0px 3px 10px 0px #00000030;
    background-color: var(--maincolor);
  }
  @media only screen and (max-width: 768px) {
    top: ${({ isOpen }) => (isOpen ? "49px" : "0%")};
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
`;

const Links = styled.ul`
  display: flex;
  position: relative;

  @media only screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    width: 100%;
    left: 0;
    top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
    height: 50px;
    z-index: 11;
    transition: top 0.3s ease-in-out;
    &.active {
      background-color: var(--maincolor);
    }
  }
`;
const LinkItem = styled(Link)`
  margin: 0 1.5rem;
  font-size: 1.5rem;
  font-weight: 500;
  padding: 0.5rem 1rem;
  transition: opacity 0.3s ease;
  color: var(--linkcolor);
  
  @media only screen and (max-width: 768px) {
    margin: 2rem 0;
    padding: 0;
  }
  &:hover {
    opacity: 0.7;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    color: var(--linkcolor);
    cursor: pointer;
    font-size: 2.5rem;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };


  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 150) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <MainHeader className={navbar ? "active" : ""} isOpen={isOpen}>
      <motion.div
        className="container"
        initial={{ translateY: -100 }}
        animate={{ translateY: 0 }}
        exit={{ translateY: -100 }}
        transition={{ duration: 1 }}
      >
        <Nav>
          <LinksContainer>
            <Links isOpen={isOpen} className={navbar ? "active" : ""}>
              <LinkItem onClick={toggle} to="Home" smooth>
                Home
              </LinkItem>
              <LinkItem onClick={toggle} to="About" smooth>
                About
              </LinkItem>
              <LinkItem onClick={toggle} to="Portfolio" smooth>
                Portfolio
              </LinkItem>
              <LinkItem onClick={toggle} to="Contact" smooth>
                Contact
              </LinkItem>
            </Links>
            <Icon onClick={toggle}>
              <Menu  isOpen={isOpen} setIsOpen={setIsOpen} toggle={toggle}/>
            </Icon>
          </LinksContainer>
        </Nav>
      </motion.div>
    </MainHeader>
  );
};

export default Header;
