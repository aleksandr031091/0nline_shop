import useModal from "../../hooks/useModal";
import Modal from "../modal/Modal";
import Navigation from "../navigation/Navigation";
import HeaderStyled from "./HeaderStyled";
import sprite from "../../images/sprite.svg";
import Logo from "../logo/Logo";

const Header = () => {
  const [stateModal, setOpenModal] = useModal();
  return (
    <HeaderStyled>
      <Logo />
      {stateModal.width > stateModal.breakPointMobile ? (
        <Navigation />
      ) : (
        <svg className="burger_menu_icon" onClick={setOpenModal}>
          <use href={sprite + "#icon-menu"} />
        </svg>
      )}
      {stateModal.isModalOpen && (
        <Modal handleCloseModal={setOpenModal}>
          <Navigation />
        </Modal>
      )}
    </HeaderStyled>
  );
};

export default Header;
