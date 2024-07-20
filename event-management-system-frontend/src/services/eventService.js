import APIClient from "./api-client";

const apiClient = new APIClient("/event");

class EventService {
  Update(params, event) {
    return apiClient.put(params, event);
  }
}

export default new EventService();
