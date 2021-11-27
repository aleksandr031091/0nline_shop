import styled from "styled-components";

const FormCategoryStyled = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 20px 0;

  .btn_sort {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px;
    width: calc(100% / 2);
    color: #123;
    background-color: #fffeb44b;
    border: 1px solid #2155ff;
    border-radius: 5px;
    box-shadow: 0px 4px 19px 0px rgba(0, 8, 255, 0.2);
    cursor: pointer;
    transition: 300ms;
  }

  .btn_sort:hover,
  .btn_sort:focus {
    border: 1px solid #00ff22;
    background-color: #fffd6a4b;
    transform: scale(1.03);
  }

  .btn_sort:not(:last-child) {
    margin-right: 10px;
  }

  @media screen and (min-width: 480px) {
    .btn_sort:not(:last-child) {
      margin-right: 30px;
    }

    .btn_sort {
      width: 250px;
    }
  }
`;

export default FormCategoryStyled;
