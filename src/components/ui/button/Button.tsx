import React from "react";
import { HashLink } from "react-router-hash-link";

import { UilUser, UilNavigator } from "@iconscout/react-unicons";

type ButtonProps = {
  text: string;
  navigate: boolean;
  target?: string;
};

const Button = ({ text, target, navigate }: ButtonProps) => {
  function navigateButton(): JSX.Element {
    return (
      <React.Fragment>
        <button className="button">
          <HashLink className="button__container" smooth to={`/#${target}`}>
            <span className="button__image">
              <UilUser />
            </span>
            <span>{text}</span>
          </HashLink>
        </button>
      </React.Fragment>
    );
  }

  const submitButton = () => (
    <button className="button" type="submit">
      <div className="button__container">
        <span className="button__image">
          <UilNavigator />
        </span>
        <span>{text}</span>
      </div>
    </button>
  );

  return navigate ? navigateButton() : submitButton();
};

export default Button;
