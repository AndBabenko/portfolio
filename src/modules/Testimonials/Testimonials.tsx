import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { UilCommentLines } from "@iconscout/react-unicons";
import styles from "./Testimonials.module.scss";
import "shared/styles/swiper-fix.scss";

import { testimonialsList, TestimonialType, sections } from "shared/libs";

const TestimonialCard: React.FC<TestimonialType> = (props) => {
  const { name, desription, positionHead, date, imageName } = props;

  const image = require(`../../shared/assets/imgs/tesimonials/${imageName}`);

  return (
    <div className={styles.cardContainer}>
      <UilCommentLines className={styles.icon} />
      <p>{desription}</p>
      <h3>{date}</h3>
      <div className={styles.profile}>
        <img src={image} alt={name} />
        <div className={styles.clientData}>
          <h4>{name}</h4>
          <span>{positionHead}</span>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const cardsList = testimonialsList.map((item) => (
    <SwiperSlide key={item.id}>
      <TestimonialCard {...item} />
    </SwiperSlide>
  ));

  return (
    <section className={styles.testim} id={sections.testimonials.id}>
      <h2 data-heading="My Clients Says">Testimonials</h2>

      <Swiper
        className={styles.testimContainer}
        // spaceBetween={28}
        loop={true}
        grabCursor={true}
        slidesPerView={1}
        breakpoints={{
          576: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        }}
      >
        {cardsList}
      </Swiper>
    </section>
  );
};

export default Testimonials;
