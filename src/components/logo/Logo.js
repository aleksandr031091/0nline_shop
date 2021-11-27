import LogoStyled from "./LogoStyled";
import sprite from "../../images/sprite.svg";

const Logo = () => {
  return (
    <LogoStyled>
      <svg className="logo_icon">
        <use href={sprite + "#icon-logo"} />
      </svg>
      <p className="name">Best-shop</p>
    </LogoStyled>
  );
};

export default Logo;
