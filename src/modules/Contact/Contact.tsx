import React, { useRef } from "react";
import {
  UilEnvelope,
  UilWhatsappAlt,
  UilTelegram,
  UilArrowRight,
} from "@iconscout/react-unicons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./Contact.module.scss";
import Button from "shared/ui/Button";
import { sections, contactData } from "shared/libs";

const Contact: React.FC = React.memo(() => {
  const inputRef = useRef<HTMLInputElement>(null);

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
              name="formMessage"
              id="formMessage"
            ></textarea>
            <label htmlFor="formMessage">Message</label>
          </div>
          <Button bg="body" type="submit">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
});

export default Contact;
