import React from "react";
import "./project.css";

const Project = () => {
  return (
    <section class="project">
      <div class="container">
        <div class="main-projects">
          <div class="projects">
            <h2>View our projects</h2>
            <div class="div">
              <a href="#">View More</a>
              <i class="fa-solid view-more  fa-arrow-right"></i>
            </div>
          </div>
          <div class="projects-section">
            <div class="project-bcg">
              <div class="projects-text">
                <h2>
                  Workhub office Webflow <br />
                  Webflow Design
                </h2>
                <p>
                  Euismod faucibus turpis eu gravida <br /> mi. Pellentesque et
                  velit aliquam
                </p>
                <div class="project-link">
                  <a href="#">View project</a>
                  <i class="fa-solid view-more-1  fa-arrow-right"></i>
                </div>
              </div>
            </div>
            <div class="project-single">
              <div class="project-item2">
                <img src="images/design-2.png" alt="design" />
              </div>
              <div class="project-item3">
                <img src="images/human-3.png" alt="human" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
