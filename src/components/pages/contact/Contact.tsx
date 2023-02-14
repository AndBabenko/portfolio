import React, { useRef } from "react";

import {
  UilEnvelope,
  UilWhatsappAlt,
  UilTelegram,
  UilArrowRight,
} from "@iconscout/react-unicons";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Button from "../../ui/Button";

const Contact = () => {
  const inputRef = useRef<any>(null);

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

  function onCopy(data: string) {
    navigator.clipboard.writeText(data);
    toast("Copied!");
  }

  function setFocus() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <>
      <section className="contact section" id="contact">
        <h2 className="section__title" data-heading="Get In Touch">
          Contact Me
        </h2>
        <div className="contact__container container">
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
          <div className="contact__content">
            <div className="contact__info">
              <div className="contact__card">
                <UilEnvelope className="contact__card-icon" />
                <h3 className="contact__card-title">Email</h3>
                <span
                  className="contact__card-data"
                  onClick={() => onCopy("and.babenko96@gmail.com")}
                >
                  and.babenko96@gmail.com
                </span>
                <span
                  className="contact__card-button"
                  onClick={() => setFocus()}
                >
                  Write Me:
                  <UilArrowRight className="contact__card-arrow" />
                </span>
              </div>

              <div className="contact__card">
                <UilWhatsappAlt className="contact__card-icon" />
                <h3 className="contact__card-title">Whatsapp</h3>
                <span
                  className="contact__card-data"
                  onClick={() => onCopy("+380(95)-476-87-30")}
                >
                  +380(95)-476-87-30
                </span>
                <span
                  className="contact__card-button"
                  onClick={() => setFocus()}
                >
                  Write Me:
                  <UilArrowRight className="contact__card-arrow" />
                </span>
              </div>

              <div className="contact__card">
                <UilTelegram className="contact__card-icon" />
                <h3 className="contact__card-title">Telegram</h3>
                <span
                  className="contact__card-data"
                  onClick={() => onCopy("@Nicandros")}
                >
                  @Nicandros
                </span>
                <span
                  className="contact__card-button"
                  onClick={() => setFocus()}
                >
                  Write Me:
                  <UilArrowRight className="contact__card-arrow" />
                </span>
              </div>
            </div>
          </div>

          <div className="contact__content">
            <form className="form" autoComplete="off">
              <div className="form__container">
                <span className="form__text-top">Name</span>
                <input
                  ref={inputRef}
                  onFocus={onInputFocus}
                  onBlur={onInputBlur}
                  id="formName"
                  type="text"
                  className="form__input"
                  autoComplete="new-name"
                />
                <label className="form__label" htmlFor="formName">
                  Name
                </label>
              </div>
              <div className="form__container">
                <span className="form__text-top">Email</span>
                <input
                  onFocus={onInputFocus}
                  onBlur={onInputBlur}
                  type="email"
                  className="form__input"
                  id="formMail"
                  autoComplete="new-mail"
                />
                <label className="form__label" htmlFor="formMail">
                  Email
                </label>
              </div>
              <div className="form__container">
                <span className="form__text-top">Phone</span>
                <input
                  onFocus={onInputFocus}
                  onBlur={onInputBlur}
                  type="text"
                  className="form__input"
                  id="formPhone"
                  autoComplete="new-phone"
                />
                <label className="form__label" htmlFor="formPhone">
                  Phone
                </label>
              </div>
              <div className="form__container">
                <span className="form__text-top">Message</span>
                <textarea
                  onFocus={onInputFocus}
                  onBlur={onInputBlur}
                  name="formMessage"
                  id="formMessage"
                  className="form__textarea"
                  autoComplete="new-message"
                ></textarea>
                <label className="form__textarea-label" htmlFor="formMessage">
                  Message
                </label>
              </div>
              <Button text="Send Message" navigate={false} />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
