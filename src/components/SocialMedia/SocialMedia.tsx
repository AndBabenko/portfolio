import React from "react";
import styles from "./SocialMedia.module.scss";

import { UilFacebook, UilGithub, UilLinkedin } from "@iconscout/react-unicons";

import { contactData } from "shared/libs";

type SocialMediaType = {
  rotate: boolean;
};

const SocialMedia: React.FC<SocialMediaType> = ({ rotate }) => {
  return (
    <div className={`${styles.socialMedia} ${rotate && styles.rotate}`}>
      <a target="_blank" href={contactData.facebook}>
        <UilFacebook />
      </a>

      <a target="_blank" href={contactData.linkedIn}>
        <UilLinkedin />
      </a>

      <a target="_blank" href={contactData.gitHub}>
        <UilGithub />
      </a>
    </div>
  );
};

export default SocialMedia;
