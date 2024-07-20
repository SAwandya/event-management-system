import React, { useState } from "react";
import "../style/navBar.css";
import { Link, useNavigate } from "react-router-dom";
import AttendeeRegisterForm from "../pages/AttendeeRegisterForm";
import AddEventForm from "../pages/AddEventForm";
import eventService from "../services/eventService";
import useEventQueryStore from "../store";

const NavBar = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  };

  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleFormSubmit = (event) => {
    eventService
      .Add(event)
      .then((res) => {
        console.log(res);
        SetManualRefetch(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addEventBtnHandle = () => {
    setIsFormOpen(true);
  };

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
            <a href="#contact" class="nav-link">
              Contact
            </a>
            <a
              href="#events"
              class="nav-link addbtn"
              onClick={() => addEventBtnHandle()}
            >
              Add Event
            </a>
          </div>
        </nav>
      </div>
      {isFormOpen && (
        <AddEventForm
          onClose={() => setIsFormOpen(false)}
          onSubmit={handleFormSubmit}
        />
      )}
    </>
  );
};

export default NavBar;
