import React, { useState } from "react";
import "../style/ARForm.css";
import useEvent from "../hooks/useEvent";

const EventUpdateForm = ({ onClose, onSubmit, event }) => {
  // const { data } = useEvent(eventId);

  const [name, setName] = useState(event?.name);
  const [location, setLocation] = useState(event?.location);
  const [description, setDescription] = useState(event?.description);
  const [date, setDate] = useState(event?.date);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, location, description, date });
    onClose();
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Location:
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </label>
          <label>
            Date:
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
          </label>
          <label>
            Description
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </label>

          <button type="submit" className="submit-btn">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventUpdateForm;
