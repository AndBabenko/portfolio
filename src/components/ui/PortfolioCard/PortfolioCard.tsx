import React, { useState } from "react";

import { UilArrowRight } from "@iconscout/react-unicons";

import PortfolioPopup from "../PortfolioPopup";

const PortfolioCard = (props: any) => {
  const { id, shortName, longName } = props;
  const image = require(`../../../assets/imgs/work-${id}.webp`);

  const [isPopupVisible, setPopupVisible] = useState(false);

  return (
    <div className="card">
      <img src={image} alt={longName} className="card__img" />
      <h3 className="card__title">{shortName}</h3>
      <span className="card__button" onClick={() => setPopupVisible(true)}>
        Demo
        <UilArrowRight className="card__button-icon" />
      </span>

      {isPopupVisible ? (
        <PortfolioPopup
          {...props}
          onClosePopup={() => setPopupVisible(false)}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default PortfolioCard;
