import React from "react";
import Image from "next/image";

import ProjectPicture1 from "../../../../assets/project1.jpg";
import ProjectPicture2 from "../../../../assets/project2.jpg";
import ProjectPicture3 from "../../../../assets/project3.jpg";
import ProjectPicture4 from "../../../../assets/project4.jpg";
import ProjectPicture5 from "../../../../assets/project5.jpg";

const ProjectsTabComponent = () => {
  return (
    <>
      <div className="filters__sections">
        <div
          className="projects__content grid filters__active"
          data-content
          id="projects"
        >
          <article className="projects__card">
            <Image
              src={ProjectPicture1}
              alt="Project Picture 1"
              className="projects__img"
            />
            <div className="projects__modal">
              <div>
                <span className="projects__subtitle">Web</span>
                <h3 className="projects__title">Payment Site</h3>
                <a href="#" className="projects__button button button__small">
                  <i className="ri-link"></i>
                </a>
              </div>
            </div>
          </article>

          <article className="projects__card">
            <Image
              src={ProjectPicture2}
              alt="Project Picture 2"
              className="projects__img"
            />
            <div className="projects__modal">
              <div>
                <span className="projects__subtitle">Web</span>
                <h3 className="projects__title">Portfolio website</h3>
                <a href="#" className="projects__button button button__small">
                  <i className="ri-link"></i>
                </a>
              </div>
            </div>
          </article>

          <article className="projects__card">
            <Image
              src={ProjectPicture3}
              alt="Project Picture 2"
              className="projects__img"
            />
            <div className="projects__modal">
              <div>
                <span className="projects__subtitle">Movil</span>
                <h3 className="projects__title">Fast food app</h3>
                <a href="#" className="projects__button button button__small">
                  <i className="ri-link"></i>
                </a>
              </div>
            </div>
          </article>

          <article className="projects__card">
            <Image
              src={ProjectPicture4}
              alt="Project Picture 2"
              className="projects__img"
            />
            <div className="projects__modal">
              <div>
                <span className="projects__subtitle">Movil</span>
                <h3 className="projects__title">Travel app</h3>
                <a href="#" className="projects__button button button__small">
                  <i className="ri-link"></i>
                </a>
              </div>
            </div>
          </article>

          <article className="projects__card">
            <Image
              src={ProjectPicture5}
              alt="Project Picture 2"
              className="projects__img"
            />
            <div className="projects__modal">
              <div>
                <span className="projects__subtitle">Design</span>
                <h3 className="projects__title">Music app design</h3>
                <a href="#" className="projects__button button button__small">
                  <i className="ri-link"></i>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default ProjectsTabComponent;
