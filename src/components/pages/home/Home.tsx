import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  UilFacebook,
  UilInstagramAlt,
  UilLinkedin,
  UilFacebookMessenger,
  UilWhatsappAlt,
  UilTelegram,
  UilEnvelope,
} from "@iconscout/react-unicons";

import homeImg from "../../../assets/imgs/home-img.png";
import Button from "../../ui/button";

const Home: React.FC = () => {
  function onCopy(data: string) {
    navigator.clipboard.writeText(data);
    toast("Copied!");
  }

  return (
    <>
      <section className="home" id="home">
        <div className="container">
          <div className="home__popup">
            <ToastContainer
              position="top-right"
              autoClose={1500}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss={false}
              pauseOnHover={false}
              theme="dark"
            />
          </div>

          <div className="home__social">
            <span className="home__social-follow">Follow Me</span>
            <div className="home__social-links">
              <a
                target="_blank"
                href="https://www.facebook.com/and.babenko"
                className="home__social-item"
              >
                <UilFacebook />
              </a>

              <a
                target="_blank"
                href="https://www.instagram.com/andbabenko/"
                className="home__social-item"
              >
                <UilInstagramAlt />
              </a>

              <a
                target="_blank"
                href="https://ua.linkedin.com/"
                className="home__social-item"
              >
                <UilLinkedin />
              </a>
            </div>
          </div>

          {/* <img src={homeImg} className="home__img"></img> */}

          <div className="home__data">
            <h1 className="home__title">Hi, I'm Andrey!</h1>
            <h3 className="home__subtitle">Frontend Developer</h3>
            <p className="home__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              eius magni earum sint nisi accusamus? Ea tempore corrupti tempora
              debitis. Qui, ipsa?
            </p>

            <Button text="More About Me" target="about" />
          </div>

          <div className="home__info">
            <div className="home__info-item">
              <UilFacebookMessenger className="home__info-image" />
              <div className="dev">
                <h3 className="home__info-title">Messenger</h3>
                <span
                  className="home__info-subtitle"
                  onClick={() => onCopy("+38-095-476-8730")}
                >
                  +38-095-476-8730
                </span>
              </div>
            </div>

            <div className="home__info-item">
              <UilWhatsappAlt className="home__info-image" />
              <div>
                <h3 className="home__info-title">Whatsapp</h3>
                <span
                  className="home__info-subtitle"
                  onClick={() => onCopy("+38-095-476-8730")}
                >
                  +38-095-476-8730
                </span>
              </div>
            </div>

            <div className="home__info-item">
              <UilTelegram className="home__info-image" />
              <div>
                <h3 className="home__info-title">Telegram</h3>
                <span
                  className="home__info-subtitle"
                  onClick={() => onCopy("@Nicandros")}
                >
                  @Nicandros
                </span>
              </div>
            </div>

            <div className="home__info-item">
              <UilEnvelope className="home__info-image" />
              <div>
                <h3 className="home__info-title">Email</h3>
                <span
                  className="home__info-subtitle"
                  onClick={() => onCopy("and.babenko96@gmail.com")}
                >
                  and.babenko96@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
