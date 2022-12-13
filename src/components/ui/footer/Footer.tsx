import React from "react";

import icon from "../../../assets/svgs/tech.svg";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__bg">
          <div className="footer__container container">
            <div>
              <div className="footer__title">Andrey</div>
              <div className="footer__subtitle">Frontend Developer</div>
            </div>

            <ul className="footer__link-container">
              <li>
                <a href="#services" className="footer__link">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="footer__link">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="contact" className="footer__link">
                  Contact
                </a>
              </li>
            </ul>

            <div className="footer__social">
              {/* //TODO SVG icons (around 26:00) */}

              <a href="#" className="footer__social-item">
                <img className="icon" src={icon}></img>
              </a>

              <a href="#" className="footer__social-item">
                <img className="icon" src={icon}></img>
              </a>

              <a href="#" className="footer__social-item">
                <img className="icon" src={icon}></img>
              </a>
            </div>
          </div>
          <p className="footer__copy">&#169; Copyright. All rights reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
