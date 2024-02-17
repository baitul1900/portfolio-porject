import React from "react";
import light from "../assets/images/svg/lights.svg";
import pen from "../assets/images/svg/pen.svg";
import design from "../assets/images/svg/design.svg";
import development from "../assets/images/svg/development.svg";

const OurDesignProcess = () => {
  // card data
  const cardData = [
    {
      id: 1,
      img: light,
      title: "Ideation.",
      des: "User experience (UX) research is about diving deep into how customers interact with your brand on a practical,",
    },
    {
      id: 2,
      img: pen,
      title: "Sketching..",
      des: "User experience (UX) research is about diving deep into how customers interact with your brand on a practical,",
    },
    {
      id: 3,
      img: design,
      title: "Design.",
      des: "User experience (UX) research is about diving deep into how customers interact with your brand on a practical,",
    },
    {
      id: 4,
      img: development,
      title: "Development.",
      des: "User experience (UX) research is about diving deep into how customers interact with your brand on a practical,",
    },
  ];

  return (
    <section className="design-process">
      <h1>
        Our Design <br /> Process
      </h1>

      {/* card section goes here */}
      <div className="row d-flex">
        {cardData.map((item) => {
          return (
            <div className="col-sm-12 col-lg-3" key={item["id"]}>
              <div className="card ">
                <div className="card-image">
                  <img src={item["img"]} className="img-fluid" alt="" />
                </div>
                <div className="card-body p-0">
                  <h3>{item["title"]}</h3>
                  <p>{item["des"]}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurDesignProcess;
