import styled from "styled-components";

const ModalStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 30px;
  text-align: center;
  height: 100vh;
  width: 100%;
  background-color: #ffffff;
  z-index: 100;

  .modal_close_icon {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 30px;
    height: 30px;

    fill: #000000;
  }
`;

export default ModalStyled;
