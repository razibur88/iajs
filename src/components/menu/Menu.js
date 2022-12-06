import React from "react";
import { Link } from "react-router-dom";
import "./menu.css";

const Menu = () => {
  return (
    <header>
      <nav class="nav">
        <div class="container">
          <div class="main">
            <div class="logo">
              <img src="images/logo-nav.png" alt="logo" />
            </div>
            <div class="menu">
              <Link to="/">Home</Link>
              <Link to="/about"> About us </Link>
              <Link to="/todo">Todo</Link>

              <a class="contact-us" href="contact.html">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Menu;
