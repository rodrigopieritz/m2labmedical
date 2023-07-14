import React, { createContext, useState } from "react";
import { ModalComponent } from "../components/Modal/ModalComponent";

export const ModalContext = createContext({
  showModal: false,
  setShowModal: () => {},
});

export const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <ModalContext.Provider value={{ showModal, setShowModal }}>
      {children}
      {showModal && <ModalComponent />}
    </ModalContext.Provider>
  );
};
