import React from "react";
import sprite from "../../images/sprite.svg";
import ModalStyled from "./ModalStyled";

const Modal = ({ children, handleCloseModal }) => {
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
