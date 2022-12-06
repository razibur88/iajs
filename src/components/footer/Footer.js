import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div class="footer">
      <div class="container">
        <div class="footer-main">
          <div class="footer-left">
            <div class="footer-logo">
              <img src="images/logo-nav.png" alt="" />
              <p>
                We are always open to discuss your project and <br /> improve
                your online presence.
              </p>
            </div>
            <div class="footer-contact-body">
              <div class="footer-contact-left">
                <h6>Email me at</h6>
                <p>contact@website.com</p>
              </div>
              <div class="footer-contact-left">
                <h6>Call us</h6>
                <p>0927 6277 28525</p>
              </div>
            </div>
          </div>
          <div class="footer-right">
            <h2>Lets Talk!</h2>
            <p>
              We are always open to discuss your project,
              <br /> improve your online presence and help with your <br />{" "}
              UX/UI design challenges.
            </p>
            <i class="fa-brands media-fb fa-facebook"></i>
            <i class="fa-brands media-link fa-square-twitter"></i>
            <i class="fa-brands media-link fa-instagram"></i>
            <i class="fa-brands media-link fa-linkedin"></i>
          </div>
        </div>
      </div>
      <div class="white">
        <div class="container">
          <div class="footer-menu">
            <p>Copyright 2022, Finsweet.com</p>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="about.html">About us</a>
              </li>
              <li>
                <a href="features.html">Features</a>
              </li>
              <li>
                <a href="pricing.html">pricing</a>
              </li>
              <li>
                <a href="work.html">FAQ</a>
              </li>
              <li>
                <a href="blog.html">Blog</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
