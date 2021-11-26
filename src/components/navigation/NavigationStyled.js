import styled from "styled-components";

const NavigationStyled = styled.nav`
  .nav_list_item:not(:last-child) {
    margin: 0 0 10px 0;
  }

  .nav_link {
    font-weight: 700;
    font-size: 20px;
    color: #37afff;
    text-transform: capitalize;
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
  }
`;

export default NavigationStyled;
