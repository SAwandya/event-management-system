import React from "react";
import "../style/navBar.css";

const NavBar = () => {

  return (
    <>
      <div>
        <nav class="navbar" >
          <div class="navbar-brand">Event List</div>
          <button
            class="navbar-toggle"
            id="navbar-toggle"
          >
            &#9776;
          </button>
          <div class="navbar-links" id="navbar-links">
            <a href="#home" class="nav-link">
              Home
            </a>
            <a href="#about" class="nav-link">
              About
            </a>
            <a href="#events" class="nav-link">
              Events
            </a>
            <a href="#contact" class="nav-link">
              Contact
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
