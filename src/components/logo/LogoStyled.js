import styled from "styled-components";

const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 10px;
  background-image: linear-gradient(139deg, #fb8817, #ff4b01, #c12127, #e02aff);

  .logo_icon {
    margin-right: 5px;
    width: 20px;
    height: 20px;
  }

  .name {
    font-weight: 700;
    font-size: 15px;
  }
`;

export default LogoStyled;
