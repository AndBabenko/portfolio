import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  UilWhatsappAlt,
  UilTelegram,
  UilEnvelope,
} from "@iconscout/react-unicons";

import styles from "./Home.module.scss";
import homeImg from "shared/assets/imgs/photos/home-img.png";
import { contactData, sections } from "shared/libs";
import Button from "shared/ui/Button";
import SocialMedia from "components/SocialMedia";

const Home: React.FC = () => {
  const onCopy = (data: string) => {
    navigator.clipboard.writeText(data);
    toast("Copied!");
  };

  return (
    <section className={styles.home} id={sections.home.id}>
      <div className={styles.homeContainer}>
        <div className={styles.toast}>
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

        <div className={styles.social}>
          <span>Follow Me</span>
          <SocialMedia rotate={true} />
        </div>

        <img src={homeImg} className={styles.smallImage} />

        <div className={styles.data}>
          <h1>Hi, I'm Andrey!</h1>
          <h3>Frontend Developer</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            eius magni earum sint nisi accusamus? Ea tempore corrupti tempora
            debitis. Qui, ipsa?
          </p>

          <Button bg="box" type="navigate" target={sections.about.id}>
            More About Me
          </Button>
        </div>

        <div className={styles.contact}>
          <div className={styles.contactItem}>
            <UilWhatsappAlt className={styles.contactImage} />
            <div>
              <h3>Whatsapp</h3>
              <span onClick={() => onCopy(contactData.phone)}>
                {contactData.phone}
              </span>
            </div>
          </div>

          <div className={styles.contactItem}>
            <UilTelegram className={styles.contactImage} />
            <div>
              <h3>Telegram</h3>
              <span onClick={() => onCopy(contactData.telegram)}>
                {contactData.telegram}
              </span>
            </div>
          </div>

          <div className={styles.contactItem}>
            <UilEnvelope className={styles.contactImage} />
            <div>
              <h3>Email</h3>
              <span onClick={() => onCopy(contactData.email)}>
                {contactData.email}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
