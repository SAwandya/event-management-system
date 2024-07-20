import React from "react";
import "../style/attendeeList.css";
import useAttendees from "../hooks/useAttendees";
import useEventQueryStore from "../store";

const AttendeeList = () => {
  const selectedEvent = useEventQueryStore((s) => s.selectedEvent);

  const { data } = useAttendees(selectedEvent);

  console.log(data);

  return (
    <div class="attendee-list">
      {data?.attendees?.map((attendee) => (
        <div class="attendee-card">
          <h3 class="attendee-name">{attendee.name}</h3>
          <p class="attendee-email">{attendee.email}</p>
          <p class="attendee-phone">{attendee.phone}</p>
          <p class="attendee-registerType">{attendee.registerType}</p>
          <div class="attendee-buttons">
            <button class="update-btn">Update</button>
            <button class="delete-btn">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AttendeeList;
