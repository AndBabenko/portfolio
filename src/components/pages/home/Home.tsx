import React from "react";

import homeImg from "../../../assets/imgs/home-img.png";

import icon from "../../../assets/svgs/tech.svg";

const Home: React.FC = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="container">
          <div className="home__social">
            <span className="home__social__follow">Follow Me</span>
            <div className="home__social__links">
              {/* //TODO SVG icons (around 26:00) */}

              <a href="#" className="home__social__item">
                <img className="icon" src={icon}></img>
              </a>

              <a href="#" className="home__social__item">
                <img className="icon" src={icon}></img>
              </a>

              <a href="#" className="home__social__item">
                <img className="icon" src={icon}></img>
              </a>
            </div>
          </div>

          <img src={homeImg} className="home__img"></img>

          <div className="home__data">
            <h1 className="home__title">Hi, I'm Andrey!</h1>
            <h3 className="home__subtitle">Frontend Developer</h3>
            <p className="home__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              eius magni earum sint nisi accusamus? Ea tempore corrupti tempora
              debitis. Qui, ipsa? Ad, cupiditate odio, ipsa similique obcaecati
              nihil aliquid quia ducimus corporis eveniet veritatis esse
              eligendi! Laudantium, veritatis et!
            </p>
            {/* //TODO Add SVG (27:51) */}
            <button className="button">
              <img className="icon home__info__image" src={icon} />
              <a href="#about">More About Me</a>
            </button>
          </div>

          <div className="home__info">
            {/* //TODO Add SVG (29) add svg-styles (38:20) */}

            <div className="home__info__item">
              <img className="icon home__info__image" src={icon}></img>
              <div className="dev">
                <h3 className="home__info__title">Messenger</h3>
                <span className="home__info__subtitle">Lorem ipsum dolor.</span>
              </div>
            </div>

            <div className="home__info__item">
              <img className="icon" src={icon}></img>
              <div>
                <h3 className="home__info__title">Whatsapp</h3>
                <span className="home__info__subtitle">
                  Lorem, ipsum dolor.
                </span>
              </div>
            </div>

            <div className="home__info__item">
              <img className="icon" src={icon}></img>
              <div>
                <h3 className="home__info__title">Telegram</h3>
                <span className="home__info__subtitle">
                  Lorem, ipsum dolor.
                </span>
              </div>
            </div>

            <div className="home__info__item">
              <img className="icon" src={icon}></img>
              <div>
                <h3 className="home__info__title">Email</h3>
                <span className="home__info__subtitle">
                  Lorem, ipsum dolor.
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
