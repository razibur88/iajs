import React from "react";
import Workreuseable from "../reuseable/Workreuseable";
import "./work.css";

const Work = () => {
  return (
    <div class="work">
      <div class="container">
        <div class="work-details">
          <div class="we-work">
            <h2>How we work</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>

            <div class="touch-1">
              <a href="#">Get in touch with us</a>
              <i class="fa-solid arrow fa-arrow-right"></i>
            </div>
          </div>
          <div class="work-section">
            <Workreuseable
              title="razib"
              paragrap="consectetur adipiscing elit, sed do"
              icon="images/pointer 1.png"
            />
            <Workreuseable
              title="azmir"
              paragrap="consectetur adipiscing elit, sed do"
              icon="images/pointer 1.png"
            />
            <Workreuseable
              title="alif"
              paragrap="consectetur adipiscing elit, sed do"
              icon="images/pointer 1.png"
            />
            <Workreuseable
              title="shohel"
              paragrap="consectetur adipiscing elit, sed do"
              icon="images/pointer 1.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
