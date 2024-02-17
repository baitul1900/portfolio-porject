import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const icons = [
    {
      icon: "bi bi-twitter-x",
      link: "https://metax.io/",
    },
    {
      icon: "bi bi-linkedin",
      link: "https://www.linkedin.com/in/mshongoti/",
    },
    {
      icon: "bi bi-instagram",
      link: "https://www.instagram.com/mshongoti/",
    },
    {
      icon: "bi bi-dribbble",
      link: "https://dribbble.com/mshongoti",
    },
    {
      icon: "bi bi-whatsapp",
      link: "https://wa.me/918810111111",
    },
    {
      icon: "bi bi-behance",
      link: "https://www.behance.net/mshongoti",
    },
  ];

  return (
    <footer>
      <div className="container text-center pb-5">
        <h1 className="mb-0 text-center">Let’s work together</h1>

        <p className="just-say-hello mb-0 text-center">Just Say Hello,</p>

        <Link className="btn">
          <i className="bi bi-envelope pe-2"></i>
          <span>mishushongoti@ideated_lab.com</span>
        </Link>

        <br />

        <Link className="btn mb-5">
          <i className="bi bi-whatsapp pe-2"></i>
          <span>+88 017 000 00000</span>
        </Link>
      </div>

      <div className="container-fluid text-center second-footer-container pt-3 pb-5">
        {icons.map((items, i) => {
          return (
            <Link
              key={i}
              to={`${items["link"]}`}
              className="footer-social-media text-decoration-none mx-3"
            >
              <i className={`${items["icon"]}`}></i>
            </Link>
          );
        })}

        <p className="mb-0 copyright-aleart">All rights reserved. © Copyright 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
