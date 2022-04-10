import React from "react";

export const FiltersTabComponent = () => {
  return (
    <>
      <ul className="filters__content">
        <button
          className="filters__button filter-tab-active"
          data-target="#projects"
        >
          Projects
        </button>
        <button className="filters__button" data-target="#skills">
          Skills
        </button>
      </ul>
    </>
  );
};
