import React from "react";
import styled from "styled-components";
import PrimaryButton from "./buttons/PrimaryButton";
import HomeV from "../assets/videos/home.mp4";
import MbHome from "../assets/videos/mbhome.mp4";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Section = styled.section`
  padding: 10rem 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  video {
    background-attachment: fixed;
    object-fit: cover;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 0;
  }
  .container {
    position: relative;
  }
`;
const Video = styled.video`
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;
const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  z-index: 2;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
`;

const HeroT = styled(motion.h1)`
  font-size: 13rem;
  letter-spacing: 2px;
  font-family: "Kaushan Script";
  color: var(--seccolor);
  @media only screen and (max-width: 768px) {
    font-size: 6rem;
  }
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const A = styled.a`
  font-size: 2.5rem;
  color: var(--seccolor);
  @media only screen and (max-width: 768px) {
    font-size: 1.9rem;
  }
`;

const Facebook = styled(FaFacebook)``;
const Twitter = styled(FaTwitter)``;
const Github = styled(FaGithub)``;
const LinkedIn = styled(FaLinkedin)``;

const Home = () => {
  return (
    <Section id="Home">
      <video autoPlay loop muted>
        <source src={HomeV} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Video autoPlay loop muted>
        <source src={MbHome} type="video/mp4" />
        Your browser does not support the video tag.
      </Video>
      <div className="overlay"></div>
      <div className="container">
        <Profile>
          <Title>
            <HeroT
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="HTitle"
            >
              D
            </HeroT>
            <HeroT
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="HTitle"
            >
              i
            </HeroT>
            <HeroT
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="HTitle"
            >
              a
            </HeroT>
            <HeroT
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="HTitle"
            >
              a
            </HeroT>
            <HeroT
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="HTitle"
            >
              Z
            </HeroT>
            <HeroT
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="HTitle"
            >
              a
            </HeroT>
            <HeroT
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="HTitle"
            >
              h
            </HeroT>
            <HeroT
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="HTitle"
            >
              r
            </HeroT>
            <HeroT
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="HTitle"
            >
              a
            </HeroT>
            <HeroT
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="HTitle"
            >
              n
            </HeroT>
          </Title>

          <Social
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            <A href="https://www.facebook.com/DiaaDinZahran/" target="_blank">
              <Facebook />
            </A>
            <A href="https://twitter.com/DiaaDinZahran" target="_blank">
              <Twitter />
            </A>
            <A href="https://github.com/DiaaDin" target="_blank">
              <Github />
            </A>
            <A
              href="https://www.linkedin.com/in/diaadinzahran/"
              target="_blank"
            >
              <LinkedIn />
            </A>
          </Social>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            <PrimaryButton
              className="hireBtn"
              href="https://wa.link/lccfzt"
              target="_blank"
            >
              Hire Me
            </PrimaryButton>

            <PrimaryButton
              className="CVBtn"
              href="https://drive.google.com/u/0/uc?id=1FfXgayPchOuzfMoCDoQXtp0tNgcxeiBC&export=download"
              target="_blank"
            >
              Download CV
            </PrimaryButton>
          </motion.div>
        </Profile>
      </div>
    </Section>
  );
};

export default Home;
