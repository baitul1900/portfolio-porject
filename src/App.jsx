import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import AppNavBar from "./layouts/AppNavBar";

const App = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <BrowserRouter>
      <div>
        <AppNavBar scrollToSection={scrollToSection} />
        <HomePage/>
      </div>
    </BrowserRouter>
  );
};

export default App;
