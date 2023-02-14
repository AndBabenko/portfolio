import React from "react";

import { UilCommentLines } from "@iconscout/react-unicons";

const TestimonialCard = ({ id, desription, date, name, positionHead }: any) => {
  const image = require(`../../../assets/imgs/client-${id}.jpg`);

  return (
    <>
      <div className="testimonials__card">
        <UilCommentLines className="testimonials__icon" />

        <p className="testimonials__description">{desription}</p>
        <h3 className="testimonials__date">{date}</h3>
        <div className="testimonials__profile">
          <img className="testimonials__profile-img" src={image} />

          <div className="testimonials__profile-data">
            <span className="testimonials__profile-name">{name}</span>
            <span className="testimonials__profile-detail">{positionHead}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
