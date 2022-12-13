import React from "react";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import icon from "../../../assets/svgs/tech.svg";
import client1 from "../../../assets/imgs/client1.jpg";

const Testimonials = () => {
  //TODO using Swiper!!!! Conspect!
  return (
    <>
      <section className="testimonials section">
        <h2 className="section__title" data-heading="My Clients Says">
          Testimonials
        </h2>

        <Swiper
          modules={[Pagination]}
          className="testimonials__container container"
          spaceBetween={30}
          loop={true}
          grabCursor={true}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 48,
            },
          }}
        >
          <SwiperSlide>
            <div className="testimonials__card">
              <div className="testimonials__quote">
                <img className="icon" src={icon} />
              </div>
              <p className="testimonials__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                repellendus dolores dolorum dignissimos, perferendis incidunt?
              </p>
              <h3 className="testimonials__date">March 27. 2020</h3>
              <div className="testimonials__profile">
                <img className="testimonials__profile__img" src={client1} />

                <div className="testimonials__profile__data">
                  <span className="testimonials__profile__name">Jane 2</span>
                  <span className="testimonials__profile__detail">
                    Director
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonials__card">
              <div className="testimonials__quote">
                <img className="icon" src={icon} />
              </div>
              <p className="testimonials__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                repellendus dolores dolorum dignissimos, perferendis incidunt?
              </p>
              <h3 className="testimonials__date">March 27. 2020</h3>
              <div className="testimonials__profile">
                <img className="testimonials__profile__img" src={client1} />

                <div className="testimonials__profile__data">
                  <span className="testimonials__profile__name">Jane 3</span>
                  <span className="testimonials__profile__detail">
                    Director
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonials__card">
              <div className="testimonials__quote">
                <img className="icon" src={icon} />
              </div>
              <p className="testimonials__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                repellendus dolores dolorum dignissimos, perferendis incidunt?
              </p>
              <h3 className="testimonials__date">March 27. 2020</h3>
              <div className="testimonials__profile">
                <img className="testimonials__profile__img" src={client1} />

                <div className="testimonials__profile__data">
                  <span className="testimonials__profile__name">Jane4</span>
                  <span className="testimonials__profile__detail">
                    Director
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="testimonials__card">
              <div className="testimonials__quote">
                <img className="icon" src={icon} />
              </div>
              <p className="testimonials__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                repellendus dolores dolorum dignissimos, perferendis incidunt?
              </p>
              <h3 className="testimonials__date">March 27. 2020</h3>
              <div className="testimonials__profile">
                <img className="testimonials__profile__img" src={client1} />

                <div className="testimonials__profile__data">
                  <span className="testimonials__profile__name">Jane 5</span>
                  <span className="testimonials__profile__detail">
                    Director
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Testimonials;
