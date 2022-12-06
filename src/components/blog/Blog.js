import React from "react";
import "./blog.css";

const Blog = () => {
  return (
    <div class="blog">
      <div class="container">
        <div class="blog-title">
          <h2>Our blog</h2>
        </div>
        <div class="main-card">
          <div class="card-seonde">
            <img src="images/arabic.png" alt="" />
            <div class="card-details">
              <div class="label">
                <label for="">19 Jan 2022</label>
              </div>
              <h6>
                How one Webflow user grew his single person consultancy from
                $0-100K in 14 months
              </h6>
              <p>
                See how pivoting to Webflow changed one person’s sales strategy
                and allowed him to attract
              </p>
              <div class="more">
                <a href="#">Read More</a>
                <i class="fa-solid  fa-arrow-right"></i>
              </div>
            </div>
          </div>
          <div class="card-seonde">
            <img src="images/women-computers.png" alt="" />
            <div class="card-details">
              <div class="label">
                <label for="">19 Jan 2022</label>
              </div>
              <h6>
                How one Webflow user grew his single person consultancy from
                $0-100K in 14 months
              </h6>
              <p>
                See how pivoting to Webflow changed one person’s sales strategy
                and allowed him to attract
              </p>
              <div class="more">
                <a href="#">Read More</a>
                <i class="fa-solid  fa-arrow-right"></i>
              </div>
            </div>
          </div>
          <div class="card-seonde">
            <img src="images/apple-monitors.png" alt="" />
            <div class="card-details">
              <div class="label">
                <label for="">19 Jan 2022</label>
              </div>
              <h6>
                How one Webflow user grew his single person consultancy from
                $0-100K in 14 months
              </h6>
              <p>
                See how pivoting to Webflow changed one person’s sales strategy
                and allowed him to attract
              </p>
              <div class="more">
                <a href="#">Read More</a>
                <i class="fa-solid  fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
