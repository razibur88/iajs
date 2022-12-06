import React from "react";
import "./client.css";
const Client = () => {
  return (
    <div id="client">
      <div class="container">
        <div class="client-headr">
          <div class="client-left">
            <h3>What our clients say about us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
          </div>
          <div class="client-right">
            <h5>
              "The best agency we’ve worked with so far. They understand our
              product and are able to add new features with a great focus."
            </h5>
            <div class="president">
              <div class="president-left">
                <img src="images/president.png" alt="" />
                <div class="prisedent-name">
                  <h5>Jenny Wilson</h5>
                  <h6>Vice President</h6>
                </div>
              </div>
              <div class="arrow-icon">
                <i class="fa-solid i-left fa-chevron-left"></i>
                <i class="fa-solid i-right fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
