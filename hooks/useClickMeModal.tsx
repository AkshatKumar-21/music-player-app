import { create } from 'zustand';

interface ClickMeModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useClickMeModal = create<ClickMeModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useClickMeModal;