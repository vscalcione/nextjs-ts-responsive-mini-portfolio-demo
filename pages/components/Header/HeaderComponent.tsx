import React from "react";
import Image from "next/image";

import ProfilePicture from "../../../assets/profile.png";

import ProfileSocialComponent from "../Profile/ProfileSocialComponent";
import ProfileInfoComponent from "../Profile/ProfileInfoComponent";
import ProfileButtonsComponent from "../Profile/ProfileButtonsComponent";

const HeaderComponent = () => {
  return (
    <>
      <header className="profile container">
        <i className="ri-moon-line change-theme" id="theme-button"></i>
        <div className="profile__container grid">
          <div className="profile__data">
            <div className="profile__border">
              <div className="profile__perfil">
                <Image src={ProfilePicture} alt="Profile Picture" />
              </div>
            </div>

            <h2 className="profile__name">Vincenzo Scalcione</h2>
            <h3 className="profile_profession">
              Senior Fullstack Web Developer
            </h3>

            <ProfileSocialComponent />
          </div>

          <ProfileInfoComponent />
          <ProfileButtonsComponent />
        </div>
      </header>
    </>
  );
};

export default HeaderComponent;
