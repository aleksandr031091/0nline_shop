import styled from "styled-components";
const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-width: 0 0 5px;
  border-bottom-style: solid;
  border-image: linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff) 3;

  .burger_menu_icon {
    width: 30px;
    height: 30px;
  }
`;

export default HeaderStyled;
