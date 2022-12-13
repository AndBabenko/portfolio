import React from "react";
import { HashLink } from "react-router-hash-link";

import { UilUser } from "@iconscout/react-unicons";

type buttonProps = {
  text: string;
  target: string;
};

const Button = ({ text, target }: buttonProps) => {
  return (
    <>
      <button className="button">
        <HashLink className="button__container" smooth to={`/#${target}`}>
          <span className="button__image">
            <UilUser />
          </span>
          <span>{text}</span>
        </HashLink>
      </button>
    </>
  );
};

export default Button;
