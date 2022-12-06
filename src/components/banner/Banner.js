import React from "react";
import "./banner.css";

const Banner = () => {
  return (
    <section className="banner">
      <div class="container main-banner">
        <div class="banner-text">
          <div class="banner-heading">
            <h1>Building stellar </h1>
            <h1>websites for early</h1>
            <h1>startups</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
            <p>eiusmod tempor incididunt.</p>
            <div class="btn">
              <a class="view" href="#">
                View our work
              </a>
              <a class="pricing" href="#">
                View Pricing
              </a>
              <i class="fa-solid pricing-arrow fa-arrow-right"></i>
            </div>
          </div>
          <div class="banner-logo">
            <img src="images/banner-img.png" alt="banner-imag" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
