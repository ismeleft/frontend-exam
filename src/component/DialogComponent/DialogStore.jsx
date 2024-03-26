import { create } from "zustand";

const useDialogStore = create(set => ({
  isOpen: false,
  jobDetails: null,
  openDialog: jobDetails => set({ isOpen: true, jobDetails }),
  closeDialog: () => set({ isOpen: false, jobDetails: null })
}));

export default useDialogStore;
