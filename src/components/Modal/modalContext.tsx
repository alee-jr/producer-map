import React, { createContext, useContext, useState } from "react";

interface ModalContextProps {
  modalStates: Record<string, boolean>;
  updateModalState: (modalId: string, isOpen: boolean) => void;
}

const ModalContext = createContext<ModalContextProps>({
  modalStates: {},
  updateModalState: () => {},
});

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [modalStates, setModalStates] = useState<Record<string, boolean>>({});

  function updateModalState(modalId: string, isOpen: boolean) {
    setModalStates((prevModalStates) => ({
      ...prevModalStates,
      [modalId]: isOpen,
    }));
  }

  return (
    <ModalContext.Provider value={{ modalStates, updateModalState }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
