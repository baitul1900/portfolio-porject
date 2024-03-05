import AboutPage from "./AboutPage";
import WorkPage from "./WorkPage";
import Footer from "../layouts/Footer";
import HeroComponent from "../component/HeroComponent";
import CardAnimation from "../component/CardAnimation";
import CardAnimationRtl from "../component/CardAnimationRtl";
import SkillandShareComponent from "../component/SkillandShareComponent";
import OurDesignProcess from "../component/OurDesignProcess";
import UploadForm from "./UploadForm";

// eslint-disable-next-line no-unused-vars
const HomePage = (props) => {
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

      <UploadForm/>


      <div id="contact-section">
        <Footer />
      </div>
    </>
  );
};  

export default HomePage;
