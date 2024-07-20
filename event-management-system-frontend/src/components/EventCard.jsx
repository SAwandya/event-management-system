import React from "react";
import "../style/eventCard.css";
import useEvent from "../hooks/useEvent";
import useEventQueryStore from "../store";

const EventCard = () => {
  const selectedEvent = useEventQueryStore((s) => s.selectedEvent);

  const { data } = useEvent(selectedEvent);

  return (
    <>
      <div class="card">
        {
          <>
            <h2 class="event-name"></h2>
            <p class="event-date">Date: {data?.date}</p>
            <p class="event-location">Location: { data?.location }</p>
            <p class="event-description">
             { data?.description }
            </p>
          </>
        }
      </div>
    </>
  );
};

export default EventCard;
