import React from "react";
import "../style/navBar.css";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/')
  }

  return (
    <>
      <div>
        <nav class="navbar">
          <div class="navbar-brand">Event List</div>
          <button class="navbar-toggle" id="navbar-toggle">
            &#9776;
          </button>
          <div class="navbar-links" id="navbar-links">
            <a href="#" class="nav-link" onClick={() => handleNavigate()}>
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
