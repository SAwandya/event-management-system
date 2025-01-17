import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

const apiClient = new APIClient("/events");

const useEvent = (id) =>
  useQuery({
    queryKey: ["events", id],
    queryFn: () => apiClient.get(id),
  });

export default useEvent;
