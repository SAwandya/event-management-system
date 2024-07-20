import { create } from "zustand";

const useEventQueryStore = create((set) => ({
  selectedEvent: null,
  SetSelectedEvent: (selectedEvent) => set({ selectedEvent: selectedEvent }),
  manualRefetch: null,
  SetManualRefetch: (manualRefetch) => set({ manualRefetch: manualRefetch }),
}));

export default useEventQueryStore;