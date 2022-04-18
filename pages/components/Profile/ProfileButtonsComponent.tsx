import React from "react";

const ProfileButtonsComponent = () => {
  return (
    <>
      <a href="#" className="button">
        Download my CV
        <i className="ri-download-line"></i>
      </a>

      <div className="profile__buttons-small">
        <a
          href="https://api.whatsapp.com/send?phone=3336530888&text=Hello, more information!"
          target=""
          className="button button__small button__gray"
        >
          <i className="ri-whatsapp-line"></i>
        </a>
      </div>
    </>
  );
};

export default ProfileButtonsComponent;
