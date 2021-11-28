import styled from "styled-components";
const CategotyListStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px 0 20px 0;

  .products_list {
    width: 100%;
    margin-bottom: 15px;
  }

  .btn_list_more {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    width: 200px;
    color: #123;
    background-color: #fffb004c;
    border: 1px solid #ffee56;
    border-radius: 5px;
    box-shadow: 0px 4px 19px 0px rgba(0, 8, 255, 0.2);
    cursor: pointer;
    transition: 300ms;
  }

  .btn_list_more:hover {
    border: 1px solid #a1ffae;
    transform: scale(1.1);
  }

  .btn_list_more:disabled {
    color: silver;
    background-color: transparent;
    border: 1px solid #ff764c7a;
    transform: none;
  }

  @media screen and (min-width: 485px) {
    .products_list {
      display: flex;
      flex-wrap: wrap;
      margin: -20px 0 20px -20px;
      width: 100%;
    }
  }

  @media screen and (min-width: 1280px) {
    .products_list_card {
      width: ${({ location }) =>
        location === "/"
          ? "calc((100% / 4) - 20px)"
          : "calc((100% / 3) - 20px)"};
    }
  }
`;

export default CategotyListStyled;
