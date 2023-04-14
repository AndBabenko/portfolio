import React, { useEffect, useRef, useState } from "react";
import {
  UilEnvelope,
  UilWhatsappAlt,
  UilTelegram,
  UilArrowRight,
} from "@iconscout/react-unicons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Email } from "shared/scripts/smtp";

import styles from "./Contact.module.scss";
import Button from "shared/ui/Button";
import { sections, contactData } from "shared/libs";

const Contact: React.FC = React.memo(() => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onFocus = (
    evt: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => {
    const parent = evt.target.parentNode as HTMLDivElement;
    parent?.classList.add(styles.focus);
  };

  const onBlur = (
    evt: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => {
    const parent = evt.target.parentNode as HTMLDivElement;
    if (evt.target.value === "") {
      parent?.classList.remove(styles.focus);
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

  function clearContactFields() {
    setName("");
    setEmail("");
    setMessage("");
    setPhone("");
  }

  function onBtnSubmit(evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    evt.preventDefault();

    clearContactFields();

    Email.send({
      SecureToken: "d1ea33d6-6417-4b55-ae8e-0f4470024b29",
      To: "and.babenko96@gmail.com",
      From: "and.babenko96@gmail.com",
      Subject: "Someone left his contact!",
      Body: `Someone left their contact! Maybe not all fields were filled in. The name is ${name}. Phone - ${phone}. Mail - ${email}. Additional message - ${message}.`,
    }).then((message: any) => {
      if (message === "OK") {
        toast("Thank you! I will contact you as soon as posible");
      } else {
        toast(message);
      }
      clearContactFields();
    });
  }

  return (
    <section className={styles.contact} id={sections.contact.id}>
      <h2 data-heading="Get In Touch">Contact Me</h2>

      <div className={styles.contactContainer}>
        <div className={styles.info}>
          <div className={styles.card}>
            <UilEnvelope className={styles.icon} />
            <h3>Email</h3>
            <p onClick={() => onCopy(contactData.email)}>{contactData.email}</p>
            <span onClick={() => setFocus()}>
              Write Me:
              <UilArrowRight className={styles.arrowIcon} />
            </span>
          </div>

          <div className={styles.card}>
            <UilWhatsappAlt className={styles.icon} />
            <h3>Whatsapp</h3>
            <p onClick={() => onCopy(contactData.phone)}>{contactData.phone}</p>
            <span onClick={() => setFocus()}>
              Write Me:
              <UilArrowRight className={styles.arrowIcon} />
            </span>
          </div>

          <div className={styles.card}>
            <UilTelegram className={styles.icon} />
            <h3>Telegram</h3>
            <p onClick={() => onCopy(contactData.telegram)}>
              {contactData.telegram}
            </p>
            <span onClick={() => setFocus()}>
              Write Me:
              <UilArrowRight className={styles.arrowIcon} />
            </span>
          </div>
        </div>

        <form className={styles.form} autoComplete="off">
          <div className={styles.formItem}>
            <span>Name</span>
            <input
              ref={inputRef}
              onFocus={onFocus}
              onBlur={onBlur}
              value={name}
              onChange={(evt) => setName(evt.target.value)}
              id="formName"
              type="text"
            />
            <label htmlFor="formName">Name</label>
          </div>

          <div className={styles.formItem}>
            <span>Email</span>
            <input
              onFocus={onFocus}
              onBlur={onBlur}
              value={email}
              onChange={(evt) => setEmail(evt.target.value)}
              type="email"
              id="formMail"
            />
            <label htmlFor="formMail">Email</label>
          </div>

          <div className={styles.formItem}>
            <span>Phone</span>
            <input
              onFocus={onFocus}
              onBlur={onBlur}
              value={phone}
              onChange={(evt) => setPhone(evt.target.value)}
              type="text"
              id="formPhone"
            />
            <label htmlFor="formPhone">Phone</label>
          </div>

          <div className={styles.formItem}>
            <span>Message</span>
            <textarea
              onFocus={onFocus}
              onBlur={onBlur}
              value={message}
              onChange={(evt) => setMessage(evt.target.value)}
              name="formMessage"
              id="formMessage"
            ></textarea>
            <label htmlFor="formMessage">Message</label>
          </div>
          <Button bg="body" type="submit" onClick={(evt) => onBtnSubmit(evt)}>
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
});

export default Contact;
