import React from "react";
import AccordionComponent from "./AccordionComponent";

const SkillandShareComponent = () => {
  return (
    <section className="skill-and-share">
      <div className="row g-0">
        <div className="col-lg-7">
          <div className="skill-title">
            <h1>
              SKILLS & <br /> SERVICES
            </h1>
          </div>
        </div>
        <div className="col-lg-5">
          <AccordionComponent />
        </div>
      </div>
    </section>
  );
};

export default SkillandShareComponent;
