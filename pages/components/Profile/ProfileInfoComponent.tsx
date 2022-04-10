import React from "react";

export const ProfileInfoComponent = () => {
  return (
    <>
      <div className="profile__info grid">
        <div className="profile__info-group">
          <h3 className="profile__info-number">3.5</h3>
          <p className="profile__info-description">
            Years of <br /> work
          </p>
        </div>
        <div className="profile__info-group">
          <h3 className="profile__info-number">+237</h3>
          <p className="profile__info-description">
            Completed <br /> projects
          </p>
        </div>

        <div className="profile__info-group">
          <h3 className="profile__info-number">Some</h3>
          <p className="profile__info-description">
            Satisfied <br /> customers
          </p>
        </div>
      </div>
    </>
  );
};
