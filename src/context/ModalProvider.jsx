"use client";
import CustomModal from "@/components/ui/CustomModal";
import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

export const ModalProvider = ({ children }) => {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => setModalContent(content);
  const closeModal = () => setModalContent(null);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modalContent && (
        <CustomModal open={!!modalContent} handleClose={closeModal}>
          {modalContent}
        </CustomModal>
      )}
    </ModalContext.Provider>
  );
};
