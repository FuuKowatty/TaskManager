import { useState } from "react";

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<
    "delete" | "edit" | "details" | ""
  >("");

  const openModal = (type: "delete" | "edit" | "details") => {
    setIsModalOpen(true);
    setModalType(type);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalType("");
  };

  return { isModalOpen, modalType, openModal, closeModal };
};