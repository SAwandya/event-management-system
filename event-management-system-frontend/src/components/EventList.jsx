import React from "react";
import "../style/eventList.css";

function EventList() {
  return (
    <>
      <h1>Upcoming Events</h1>
      <ul class="event-list">
        <li class="event-item">
          <h2 class="event-name">Event 1</h2>
          <div class="event-details">
            <p class="event-date">Date: July 20, 2024</p>
            <p class="event-location">Location: New York</p>
            <div class="event-buttons">
              <button class="update-btn">Update</button>
              <button class="delete-btn">Delete</button>
              <button class="register-btn">Register</button>
            </div>
          </div>
        </li>
        <li class="event-item">
          <h2 class="event-name">Event 2</h2>
          <div class="event-details">
            <p class="event-date">Date: August 15, 2024</p>
            <p class="event-location">Location: Los Angeles</p>
            <div class="event-buttons">
              <button class="update-btn">Update</button>
              <button class="delete-btn">Delete</button>
              <button class="register-btn">Register</button>
            </div>
          </div>
        </li>
        <li class="event-item">
          <h2 class="event-name">Event 3</h2>
          <div class="event-details">
            <p class="event-date">Date: September 10, 2024</p>
            <p class="event-location">Location: Chicago</p>
            <div class="event-buttons">
              <button class="update-btn">Update</button>
              <button class="delete-btn">Delete</button>
              <button class="register-btn">Register</button>
            </div>
          </div>
        </li>
        <li class="event-item">
          <h2 class="event-name">Event 3</h2>
          <div class="event-details">
            <p class="event-date">Date: September 10, 2024</p>
            <p class="event-location">Location: Chicago</p>
            <div class="event-buttons">
              <button class="update-btn">Update</button>
              <button class="delete-btn">Delete</button>
              <button class="register-btn">Register</button>
            </div>
          </div>
        </li>
        <li class="event-item">
          <h2 class="event-name">Event 3</h2>
          <div class="event-details">
            <p class="event-date">Date: September 10, 2024</p>
            <p class="event-location">Location: Chicago</p>
            <div class="event-buttons">
              <button class="update-btn">Update</button>
              <button class="delete-btn">Delete</button>
              <button class="register-btn">Register</button>
            </div>
          </div>
        </li>
        {/* <li class="event-item">
          <h2 class="event-name">Event 3</h2>
          <div class="event-details">
            <p class="event-date">Date: September 10, 2024</p>
            <p class="event-location">Location: Chicago</p>
            <div class="event-buttons">
              <button class="update-btn">Update</button>
              <button class="delete-btn">Delete</button>
              <button class="register-btn">Register</button>
            </div>
          </div>
        </li>
        <li class="event-item">
          <h2 class="event-name">Event 3</h2>
          <div class="event-details">
            <p class="event-date">Date: September 10, 2024</p>
            <p class="event-location">Location: Chicago</p>
            <div class="event-buttons">
              <button class="update-btn">Update</button>
              <button class="delete-btn">Delete</button>
              <button class="register-btn">Register</button>
            </div>
          </div>
        </li> */}
      </ul>
    </>
  );
}

export default EventList;
