import React from "react";

import { HashLink } from "react-router-hash-link";

import {
  UilFacebook,
  UilInstagramAlt,
  UilLinkedin,
} from "@iconscout/react-unicons";

import icon from "../../../assets/svgs/tech.svg";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__bg">
          <div className="footer__container container">
            <div>
              <div className="footer__title">Andrey Babenko</div>
              <div className="footer__subtitle">Frontend Developer</div>
            </div>

            <ul className="footer__link-container">
              <li>
                <HashLink className="footer__link" smooth to="/#home">
                  Home
                </HashLink>
              </li>
              <li>
                <HashLink className="footer__link" smooth to="/#about">
                  About Me
                </HashLink>
              </li>
              <li>
                <HashLink className="footer__link" smooth to="/#portfolio">
                  Portfolio
                </HashLink>
              </li>
            </ul>

            <div className="footer__social">
              <div className="home__social-links">
                <a
                  target="_blank"
                  href="https://www.facebook.com/and.babenko"
                  className="footer__social-item"
                >
                  <UilFacebook />
                </a>

                <a
                  target="_blank"
                  href="https://www.instagram.com/andbabenko/"
                  className="footer__social-item"
                >
                  <UilInstagramAlt />
                </a>

                <a
                  target="_blank"
                  href="https://ua.linkedin.com/"
                  className="footer__social-item"
                >
                  <UilLinkedin />
                </a>
              </div>
            </div>
          </div>
          <p className="footer__copy">&#169; Copyright. All rights reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
