import React from "react";
import "remixicon/fonts/remixicon.css";

export const ProfileSocialComponent = () => {
  return (
    <>
      <ul className="profile__social">
        <a
          href="https://www.instagram.com/vincenzo_scalcione/"
          target="_blank"
          className="profile__social-link"
          rel="noreferrer"
        >
          <i className="ri-instagram-line"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/vincenzo-scalcione-21b055159/"
          target="_blank"
          className="profile__social-link"
          rel="noreferrer"
        >
          <i className="ri-linkedin-box-line"></i>
        </a>
        <a
          href="https://github.com/vscalcione"
          target="_blank"
          className="profile__social-link"
          rel="noreferrer"
        >
          <i className="ri-github-line"></i>
        </a>
      </ul>
    </>
  );
};
