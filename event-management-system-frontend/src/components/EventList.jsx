import React from "react";
import "../style/eventList.css";
import useEvents from "../hooks/useEvents";

const EventList = () => {

  const { data, error, isLoading, refetch } = useEvents();

  const handleClick = (id) => {
    navigator("/")
  }

  return (
    <>
    
      <h1>Upcoming Events</h1>

      <ul className="event-list">
        {data?.map((product) => (
          <li key={product.id} onClick={handleClick} className="event-item">
            <h2 className="event-name">{product.name}</h2>
            <div className="event-details">
              <p className="event-date">Date: {product.date}</p>
              <p className="event-location">Location: {product.location}</p>
              <div className="event-buttons">
                <button className="update-btn">Update</button>
                <button className="delete-btn">Delete</button>
                <button className="register-btn">Register</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default EventList;
