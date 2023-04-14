import React from "react";
import styles from "./Button.module.scss";
import { HashLink } from "react-router-hash-link";

import { UilUser, UilNavigator } from "@iconscout/react-unicons";

type ButtonProps = {
  children: string;
  type: "navigate" | "submit";
  bg: "body" | "box";
  onClick?: (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  target?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  type,
  bg,
  onClick,
  target,
}) => {
  const NavigateButton: React.FC = () => (
    <button className={styles.button}>
      <HashLink
        className={`${styles.container} ${
          bg === "body" ? styles.bodyBtn : styles.boxBtn
        }`}
        smooth
        to={`/#${target}`}
      >
        <span className={styles.image}>
          <UilUser />
        </span>
        <span>{children}</span>
      </HashLink>
    </button>
  );

  const SubmitButton: React.FC = () => (
    <button className={styles.button} type="submit" onClick={onClick}>
      <div
        className={`${styles.container} ${
          bg === "body" ? styles.bodyBtn : styles.boxBtn
        }`}
      >
        <span className={styles.image}>
          <UilNavigator />
        </span>
        <span>{children}</span>
      </div>
    </button>
  );

  switch (type) {
    case "navigate":
      return <NavigateButton />;
    case "submit":
      return <SubmitButton />;
  }
};

export default Button;
