import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const apiClient = new APIClient("/events");

const useAttendees = (id) =>
  useQuery({
    queryKey: ["events", id],
    queryFn: () => apiClient.get(id + "/attendees"),
  });

export default useAttendees;
