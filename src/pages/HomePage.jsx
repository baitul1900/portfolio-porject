import React from "react";
import AboutPage from "./AboutPage";
import { Link } from "react-router-dom";
import WorkPage from "./WorkPage";
import Footer from "../layouts/Footer";
import HeroComponent from "../component/HeroComponent";

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

      <div id="contact-section">
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
