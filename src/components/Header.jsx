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
  transition: all .3s ease-in-out;
  &.active{
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
    background-color: var(--maincolor);
    height: 50px;
    z-index: 11;
    transition: top 0.3s ease-in-out;
  }
`;
const LinkItem = styled(Link)`
  margin: 0 1.5rem;
  font-size: 1.6rem;
  font-weight: 600;
  padding: .5rem 1rem;
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

  const [open, setOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
    setOpen(!open)
  };
const [navbar,setNavbar] = useState(false);

const changeBackground = () => {
  if(window.scrollY >= 150){
    setNavbar(true);
  }else{
    setNavbar(false);

  }
};
window.addEventListener('scroll', changeBackground);


  return (
    <MainHeader className={navbar ? 'active': ''} isOpen={isOpen} 
    data-scroll-section
    >
      <motion.div className="container" 
      initial={{ translateY:-100 }}
            animate={{ translateY: 0 }}
            exit={{ translateY: -100 }}
            transition={{ duration: 1 }}>
        <Nav>
          <LinksContainer>
            <Links isOpen={isOpen} >
              <LinkItem onClick={toggle}  to="Home" smooth>
                Home
              </LinkItem>
              <LinkItem onClick={toggle} to="About" smooth>
                About
              </LinkItem>
              <LinkItem onClick={toggle} to="Services" smooth>
                Services
              </LinkItem>
              <LinkItem onClick={toggle} to="Portfolio" smooth>
                Portfolio
              </LinkItem>
            </Links>
            <Icon onClick={toggle} >
              <Menu open={open} setOpen={setOpen}/>
            </Icon>
          </LinksContainer>
        </Nav>
      </motion.div>
    </MainHeader>
  );
};

export default Header;
