import React, { useEffect } from "react";
import "./Modal.scss";

const Modal = ({ openModal, setOpenModal, children }) => {
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = "visible";
    }
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [openModal]);

  const closeModal = () => {
    setOpenModal(false);
  };

  if (!openModal) return null;

  return (
    <div className="modal">
      <div className="modal__shadow" onClick={closeModal}></div>
      <div className="modal__inner">{children}</div>
    </div>
  );
};

export default Modal;
