import React, { useState } from "react";
import "../style/eventList.css";
import useEvents from "../hooks/useEvents";
import useEventQueryStore from "../store";
import { Navigate, useNavigate } from "react-router-dom";
import AttendeeRegisterForm from "../pages/AttendeeRegisterForm";

const EventList = () => {
  const { data, error, isLoading, refetch } = useEvents();

  const navigate = useNavigate();
  const SetSelectedEvent = useEventQueryStore((s) => s.SetSelectedEvent);

  const handleClick = (id) => {
    console.log(id);
    SetSelectedEvent(id);
    // navigate("/eventdetails");
  };

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [attendees, setAttendees] = useState([]);

  const handleFormSubmit = (attendee) => {
    setAttendees([...attendees, attendee]);
  };

  return (
    <>
      <h1>Upcoming Events</h1>

      <ul className="event-list">
        {data?.map((product) => (
          <li
            key={product.id}
            onClick={(id) => handleClick(product.id)}
            className="event-item"
          >
            <h2 className="event-name">{product.name}</h2>
            <div className="event-details">
              <p className="event-date">Date: {product.date}</p>
              <p className="event-location">Location: {product.location}</p>
              <div className="event-buttons">
                <button className="update-btn">Update</button>
                <button className="delete-btn">Delete</button>
                <button
                  className="register-btn"
                  onClick={() => setIsFormOpen(true)}
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
