import  { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import cardOne from "../assets/images/image/card-one.png";
import cardtwo from "../assets/images/image/card-two.png";
import cardThree from "../assets/images/image/card-three.png";
import cardFour from "../assets/images/image/card-four.png";

gsap.registerPlugin(ScrollTrigger);

const NewPage = () => {
  const componentRef = useRef();
  const sliderRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".new-panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: sliderRef.current,
          pin: true,
          anticipatePin: 1,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + sliderRef.current.offsetWidth,
        },
      });
    }, componentRef);
    return () => ctx.revert();
  });

  const cards = [
    {
      title: "HealthCare",
      tiitleTwo: " App Design",
      cardColor: "card-one",
      tagLine: ["Branding", "UX Design", "UI Design"],
      image: cardOne,
    },
    {
      title: "Digital Wallet ",
      tiitleTwo: "Fintech App Design",
      cardColor: "card-two",
      tagLine: ["Branding", "UX Design", "UI Design"],
      image: cardtwo,
    },
    {
      title: "Beauty Skin Care Website Design",
      cardColor: "card-three",
      tagLine: ["Branding", "UX Design", "UI Design"],
      image: cardThree,
    },

    {
      title: "Ecommerce Dashboard Admin Panel Design",
      cardColor: "card-four",
      tagLine: ["Branding", "UX Design", "UI Design"],
      image: cardFour,
    },
  ];
  return (
    <div className="new-app" ref={componentRef}>
      <div className="new-first-container">
        <h2 className="text-start">Selected Work</h2>
      </div>
      <div ref={sliderRef} className="new-container">
        <div className="new-description new-panel p-2 ">
          <div className={`card ${cards[0].cardColor} `}>
            <h1>
              <span className="card-text-one">{cards[0].title} </span>{" "}
              <span className="card-text-two">{cards[0].tiitleTwo}</span>
            </h1>
            <p className="card-tags mt-4">
              {cards[0].tagLine.map((tag, j) => (
                <span key={j}>{tag}</span>
              ))}
            </p>
            <img
              src={cards[0].image}
              className="card-img-top img-fluid "
              alt="image"
            />
          </div>
        </div>
        <div className="new-panel p-2 new-card">
          <div className={`card ${cards[1].cardColor}`}>
            <h1>
              {" "}
              <span className="card-text-one">{cards[1].title}</span>{" "}
              <span className="card-text-two">{cards[1].tiitleTwo}</span>{" "}
            </h1>
            <p className="card-tags mt-4">
              {cards[1].tagLine.map((tag, j) => (
                <span key={j}>{tag}</span>
              ))}
            </p>
            <img
              src={cards[1].image}
              className="card-img-top img-fluid "
              alt="image"
            />
          </div>
        </div>
        <div className="new-panel p-2 new-card">
          <div className={`card ${cards[2].cardColor} `}>
            <h1 className="card-title">{cards[2].title} </h1>
            <p className="card-tags mt-4">
              {cards[2].tagLine.map((tag, j) => (
                <span key={j}>{tag}</span>
              ))}
            </p>
            <img
              src={cards[2].image}
              className="card-img-top img-fluid "
              alt="image"
            />
          </div>
        </div>
        <div className="new-panel p-2 new-card">
          <div className={`card ${cards[3].cardColor} `}>
            <h1 className="card-title">{cards[3].title}</h1>
            <p className="card-tags mt-4">
              {cards[3].tagLine.map((tag, j) => (
                <span key={j}>{tag}</span>
              ))}
            </p>
            <img
              src={cards[3].image}
              className="card-img-top img-fluid "
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPage;
