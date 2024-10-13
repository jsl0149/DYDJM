import { create } from 'zustand';

interface AboutMeVisibleState {
  isVisible: boolean;
  setVisible: () => void;
  setHidden: () => void;
}

const useStore = create<AboutMeVisibleState>((set) => ({
  isVisible: false,
  setVisible: () => set(() => ({ isVisible: true })),
  setHidden: () => set(() => ({ isVisible: false })),
}));

export default useStore;
