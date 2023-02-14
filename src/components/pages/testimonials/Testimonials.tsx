import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import TestimonialCard from "../../ui/TestimotialCard";

const Testimonials = () => {
  const testimonialList = [
    {
      id: 1,
      desription: "1111 Lorem ipsum dolor ",
      date: "March 27.2020",
      name: "Jane",
      positionHead: "Director",
    },
    {
      id: 2,
      desription: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      date: "March 27.2021",
      name: "Peter",
      positionHead: "Not Director",
    },
    {
      id: 3,
      desription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi repellendus dolores dolorum  dignissimos, perferendis incidunt? dolorum dignissimos, perferendis incidunt? dolorum dignissimos, perferendis incidunt? Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi repellendus dolores dolorum dignissimos, perferendis incidunt? dolorum dignissimos, perferendis incidunt? dolorum dignissimos, perferendis incidunt?",
      date: "March 27.2022",
      name: "Anne",
      positionHead: "Almost Director",
    },
  ];

  const testimonialCards = testimonialList.map((item) => (
    <SwiperSlide key={item.id}>
      <TestimonialCard {...item} />
    </SwiperSlide>
  ));

  return (
    <>
      <section className="testimonials section" id="testimonials">
        <h2 className="section__title" data-heading="My Clients Says">
          Testimonials
        </h2>

        <Swiper
          className="testimonials__container container"
          spaceBetween={30}
          loop={true}
          grabCursor={true}
          breakpoints={{
            350: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
        >
          {testimonialCards}
        </Swiper>
      </section>
    </>
  );
};

export default Testimonials;
