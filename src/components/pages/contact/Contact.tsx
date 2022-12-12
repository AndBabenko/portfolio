import React from "react";

import icon from "../../../assets/svgs/tech.svg";

//TODO Rewrite contact input/focus + TS
//TODO Delete SPAN and rework animation
//TODO Make label unclickable

const Contact = () => {
  const onInputFocus = (e: any) => {
    const parent = e.target.parentNode;
    parent.classList.add("focus");
  };

  const onInputBlur = (e: any) => {
    const parent = e.target.parentNode;
    if (e.target.value === "") {
      parent.classList.remove("focus");
    }
  };

  return (
    <>
      <section className="contact section">
        <h2 className="section__title" data-heading="Get In Touch">
          Contact Me
        </h2>
        <div className="contact__container container">
          <div className="contact__content">
            <div className="contact__info">
              <div className="card">
                <img className="icon card__icon" src={icon} />
                <h3 className="card__title">Email</h3>
                <span className="card__data">and.babenko96@gmail.com</span>
                <span className="card__button">
                  Write Me:
                  <img className="icon card__button__icon" src={icon} />
                </span>
              </div>

              <div className="card">
                <img className="icon card__icon" src={icon} />
                <h3 className="card__title">Whatsapp</h3>
                <span className="card__data">3333333333</span>
                <span className="card__button">
                  Write Me:
                  <img className="icon card__button__icon" src={icon} />
                </span>
              </div>

              <div className="card">
                <img className="icon card__icon" src={icon} />
                <h3 className="card__title">Messenger</h3>
                <span className="card__data">fb.com</span>
                <span className="card__button">
                  Write Me:
                  <img className="icon card__button__icon" src={icon} />
                </span>
              </div>
            </div>
          </div>

          <div className="contact__content">
            <form action="" className="form">
              <div className="form__container">
                <span>Username</span>
                <input
                  onFocus={onInputFocus}
                  onBlur={onInputBlur}
                  type="text"
                  className="form__input"
                />
                <label className="form__label" htmlFor="">
                  UserName
                </label>
              </div>
              <div className="form__container">
                <span>Email</span>
                <input
                  onFocus={onInputFocus}
                  onBlur={onInputBlur}
                  type="text"
                  className="form__input"
                />
                <label className="form__label" htmlFor="">
                  Email
                </label>
              </div>
              <div className="form__container">
                <span>Phone</span>
                <input
                  onFocus={onInputFocus}
                  onBlur={onInputBlur}
                  type="text"
                  className="form__input"
                />
                <label className="form__label" htmlFor="">
                  Phone
                </label>
              </div>
              <div className="form__container">
                <span>Username</span>
                <textarea
                  onFocus={onInputFocus}
                  onBlur={onInputBlur}
                  name=""
                  id=""
                  className="form__textarea"
                ></textarea>
                <label className="form__textarea-label" htmlFor="">
                  Username
                </label>
              </div>
              <button type="submit" className="button">
                <img src={icon} className="icon" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
