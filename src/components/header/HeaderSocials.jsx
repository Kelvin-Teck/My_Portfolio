import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/eneh-chukwuemeka-kelvin-694a42198/"
        rel="noreferrer"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Kelvin-Teck" rel="noreferrer" target="_blank">
        <FaGithub />
      </a>
      <a
        href="https://twitter.com/KelvinEneh_"
        rel="noreferrer"
        target="_blank"
      >
        <BsTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
