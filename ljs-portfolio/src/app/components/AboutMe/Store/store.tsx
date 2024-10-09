import { create } from 'zustand';

interface AboutMeVisibleState {
  isVisible: boolean;
  setVisible: () => void;
  setHidden: () => void;
}

const useStore = create<AboutMeVisibleState>((set) => ({
  isVisible: false,
  setVisible: () => set((state) => ({ isVisible: true })),
  setHidden: () => set((state) => ({ isVisible: false })),
}));

export default useStore;
