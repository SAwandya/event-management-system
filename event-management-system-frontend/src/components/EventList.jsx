import React, { useState } from "react";
import "../style/eventList.css";
import useEvents from "../hooks/useEvents";
import useEventQueryStore from "../store";
import { Navigate, useNavigate } from "react-router-dom";
import AttendeeRegisterForm from "../pages/AttendeeRegisterForm";
import attendeeService from "../services/attendeeService";

const EventList = () => {
  const { data, error, isLoading, refetch } = useEvents();

  const navigate = useNavigate();
  const SetSelectedEvent = useEventQueryStore((s) => s.SetSelectedEvent);

  // const selectedEvent = useEventQueryStore(s => s.selectedEvent);

  const [eventId, setEventId] = useState(null);

  const handleClick = (id) => {
    SetSelectedEvent(id);
    navigate("/eventdetails");
  };

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [attendees, setAttendees] = useState([]);

  const handleFormSubmit = (attendee) => {
    setAttendees([...attendees, attendee]);

    console.log(eventId);

    attendeeService
      .AttendeePost(attendee, eventId + "/attendee")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const regButtonHandle = (id) => {
    setIsFormOpen(true);
    setEventId(id);
  };

  return (
    <>
      <h1>Upcoming Events</h1>

      <ul className="event-list">
        {data?.map((event) => (
          <li key={event.id} className="event-item">
            <h2 className="event-name" onClick={(id) => handleClick(event.id)}>
              {event.name}
            </h2>
            <div className="event-details">
              <p className="event-date">Date: {event.date}</p>
              <p className="event-location">Location: {event.location}</p>
              <div className="event-buttons">
                <button className="update-btn">Update</button>
                <button className="delete-btn">Delete</button>
                <button
                  className="register-btn"
                  onClick={(id) => regButtonHandle(event.id)}
                >
                  Register
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {isFormOpen && (
        <AttendeeRegisterForm
          onClose={() => setIsFormOpen(false)}
          onSubmit={handleFormSubmit}
        />
      )}
    </>
  );
};

export default EventList;
