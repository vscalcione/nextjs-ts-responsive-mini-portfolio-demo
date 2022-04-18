import React from "react";
import FiltersTabComponent from "./FiltersTab/FiltersTabComponent";
import ProjectsTabComponent from "./ProjectsTab/ProjectsTabComponent";
import SkillsTabComponent from "./SkillsTab/SkillsTabComponent";

const MainComponent = () => {
  return (
    <>
      <main className="main">
        <section className="filters container">
          <FiltersTabComponent />
          <ProjectsTabComponent />
          <SkillsTabComponent />
        </section>
      </main>
    </>
  );
};

export default MainComponent;
