import React from "react";
import "../style/eventCard.css";
import useEvent from "../hooks/useEvent";

const EventCard = () => {

  const { data } = useEvent(1001);

  console.log(data);

  return (
    <div class="card">
      <h2 class="event-name">Event Name</h2>
      <p class="event-date">Date: July 20, 2024</p>
      <p class="event-location">Location: New York</p>
      <p class="event-description">
        Description: This is a brief description of the event. It provides an
        overview of what the event is about and what attendees can expect.
      </p>
    </div>
  );
};

export default EventCard;
