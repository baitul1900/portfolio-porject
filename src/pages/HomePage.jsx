import React from "react";
import AboutPage from "./AboutPage";
import { Link } from "react-router-dom";
import WorkPage from "./WorkPage";
import Footer from "../layouts/Footer";
import HeroComponent from "../component/HeroComponent";
import CardAnimation from "../component/CardAnimation";
import CardAnimationRtl from "../component/CardAnimationRtl";
import SkillandShareComponent from "../component/SkillandShareComponent";
import OurDesignProcess from "../component/OurDesignProcess";

const HomePage = ({ scrollToSection }) => {
  return (
    <>
      <HeroComponent />
      <div id="work-section">
        <WorkPage />
      </div>
      <div id="about-section">
        <AboutPage />
      </div>

      <CardAnimation />
      <CardAnimationRtl />
      <SkillandShareComponent />
      <OurDesignProcess />
      <div id="contact-section">
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
