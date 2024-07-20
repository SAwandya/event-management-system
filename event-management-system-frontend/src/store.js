import { create } from "zustand";

const useEventQueryStore = create((set) => ({
  selectedEvent: null,
  SetSelectedEvent: (selectedEvent) => set({ selectedEvent: selectedEvent }),
}));

export default useEventQueryStore;