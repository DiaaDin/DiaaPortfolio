import React from "react";
import About from "../components/about/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../components/Home";
import Projects from "../components/projects/Projects";
import Services from "../components/services/Services";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default LandingPage;
