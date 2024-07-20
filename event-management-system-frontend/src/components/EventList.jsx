import React, { useState } from "react";
import "../style/eventList.css";
import useEvents from "../hooks/useEvents";
import useEventQueryStore from "../store";
import { Navigate, useNavigate } from "react-router-dom";
import AttendeeRegisterForm from "../pages/AttendeeRegisterForm";
import attendeeService from "../services/attendeeService";
import AttendeeUpdateForm from "../pages/EventUpdateForm";
import EventUpdateForm from "../pages/EventUpdateForm";
import eventService from "../services/eventService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const EventList = () => {
  const { data, error, isLoading, refetch } = useEvents();

  const navigate = useNavigate();

  const SetSelectedEvent = useEventQueryStore((s) => s.SetSelectedEvent);

  const [eventId, setEventId] = useState(null);

  const [event, setEvent] = useState(null);

  const handleClick = (id) => {
    SetSelectedEvent(id);
    navigate("/eventdetails");
  };

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isUpdateFormOpen, setIsUpdateFormOpen] = useState(false);

  const [attendees, setAttendees] = useState([]);

  const handleFormSubmit = (attendee) => {
    setAttendees([...attendees, attendee]);

    console.log(eventId);

    attendeeService
      .AttendeePost(attendee, eventId + "/attendee")
      .then((res) => {
        console.log(res.data);
        refetch();
        toast.success("Successfully registered");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error");
      });
  };

  const handleFormUpdate = (event) => {
    console.log(event);

    eventService
      .Update(eventId, event)
      .then((res) => {
        console.log(res);
        refetch();
        toast.success("Successfully Updated");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });

        eventService
          .delete(id)
          .then((res) => {
            console.log(res.data);
            refetch();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  const updateButtonHandle = (newdata) => {
    setIsUpdateFormOpen(true);
    setEvent(newdata);
    setEventId(newdata.id);
  };

  const regButtonHandle = (id) => {
    setIsFormOpen(true);
    setEventId(id);
  };

  return (
    <>
      <h1>Upcoming Events</h1>
      <ToastContainer />
      <ul className="event-list">
        {data?.map((newdata) => (
          <li key={newdata.id} className="event-item">
            <h2
              className="event-name"
              onClick={(id) => handleClick(newdata.id)}
            >
              {newdata.name}
            </h2>
            <div className="event-details">
              <p className="event-date">
                Date: <span className="bold-date">{newdata.date}</span>
              </p>
              <p className="event-location">
                Location: <span className="bold-date">{newdata.location}</span>
              </p>
              <div className="event-buttons">
                <button
                  className="update-btn"
                  onClick={() => updateButtonHandle(newdata)}
                >
                  Update
                </button>
                <button
                  className="delete-btn"
                  onClick={(id) => handleDelete(newdata.id)}
                >
                  Delete
                </button>
                <button
                  className="register-btn"
                  onClick={(id) => regButtonHandle(newdata.id)}
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
      {isUpdateFormOpen && (
        <EventUpdateForm
          onClose={() => setIsUpdateFormOpen(false)}
          onSubmit={handleFormUpdate}
          event={event}
        />
      )}
    </>
  );
};

export default EventList;
