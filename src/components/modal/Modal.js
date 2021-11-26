import React from "react";
import { useEffect } from "react";
import sprite from "../../images/sprite.svg";

import ModalStyled from "./ModalStyled";

const Modal = ({ children, handleCloseModal, modalName }) => {
  //   useEffect(() => {
  //     const body = document.querySelector("body");
  //     body.style.overflow = "hidden";
  //     return () => {
  //       const body = document.querySelector("body");
  //       body.style.overflow = "auto";
  //     };
  //   });

  //   const handleClick = (e) => e.target === e.currentTarget && handleCloseModal();

  const onBtnClose = () => handleCloseModal();

  return (
    <ModalStyled>
      <div className="modal">
        <svg className="modal_close_icon" onClick={onBtnClose}>
          <use href={sprite + "#icon-close"} />
        </svg>

        {children}
      </div>
    </ModalStyled>
  );
};

export default Modal;
