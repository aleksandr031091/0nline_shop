import styled from "styled-components";

const NavigationStyled = styled.nav`
  .nav_list_item:not(:last-child) {
    margin: 0 0 10px 0;
  }

  .nav_link {
    font-weight: 700;
    font-size: 50px;
    color: #437fff;
    text-transform: capitalize;
    text-shadow: rgb(202, 200, 200) 0px 1px 0px, rgb(199, 197, 197) 0px 2px 0px,
      rgb(187, 186, 186) 0px 3px 0px, rgb(199, 197, 197) 0px 4px 0px,
      rgb(199, 197, 197) 0px 5px 0px, rgba(0, 0, 0, 0.2) 0px 6px 1px,
      rgba(0, 0, 0, 0.1) 0px 0px 5px, rgba(0, 0, 0, 0.1) 0px 1px 3px,
      rgba(0, 0, 0, 0.1) 0px 3px 5px, rgba(0, 0, 0, 0.2) 0px 5px 10px,
      rgba(0, 0, 0, 0.3) 0px 10px 10px, rgba(0, 0, 0, 0.1) 0px 20px 20px;
  }

  .active_Link {
    color: tomato;
  }

  @media screen and (min-width: 485px) {
    .nav_list {
      display: flex;
    }
    .nav_list_item:not(:last-child) {
      margin: 0 10px 0 0;
    }
    .nav_link {
      font-size: 20px;
      text-shadow: none;
    }
  }
`;

export default NavigationStyled;
