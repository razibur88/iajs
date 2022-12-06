import React from "react";
import "./inquery.css";

const Inquery = () => {
  return (
    <div class="form">
      <div class="container">
        <div class="form-details">
          <div class="left">
            <div class="overlay">
              <div class="overlay-details">
                <h1>Building stellar</h1>
                <h1>websites for</h1>
                <h1>early startups</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                <p>sed do eiusmod tempor incididunt ut labore et dolore</p>
                <p>magna aliqua ut enim.</p>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="right-form-details">
              <h5>Send inquiry</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
              <div class="input-feild">
                <input type="text" placeholder="Your Name" /> <br />
                <br />
                <input type="text" placeholder="Email" />
                <br />
                <br />
                <input type="text" placeholder="Paste your Figma design URL" />
              </div>
              <div class="inquari-details">
                <a class="inquary" href="#">
                  Send an Inquiry
                </a>
                <div class="touch">
                  <a href="#">Get in touch with us</a>
                  <i class="fa-solid read fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inquery;
