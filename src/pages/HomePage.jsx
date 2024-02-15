import React from "react";
import AboutPage from "./AboutPage";
import { Link } from "react-router-dom";
import WorkPage from "./WorkPage";
import Footer from "../layouts/Footer";
import HeroComponent from "../component/HeroComponent";
import MainComponent from "../component/MainComponent";
import ParallaxComponent from "../component/ParallaxComponent";


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

      <ParallaxComponent/>

      <div id="contact-section">
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
