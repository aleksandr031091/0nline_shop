import styled from "styled-components";

const CategoryItemsStyled = styled.li`
  position: relative;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 4px 4px 8px 3px rgba(34, 60, 80, 0.2);
  transition: 300ms;

  :hover,
  :focus {
    transform: scale(1.03);
  }

  :not(:last-child) {
    margin-bottom: 15px;
  }

  .product_sale {
    position: absolute;
    top: 5px;
    left: 5px;
    padding: 5px;
    width: 100px;
    text-align: center;
    color: #fff;
    background-color: #00a700a9;
    border-radius: 5px;
  }

  .card_image {
    margin: 0 auto;
    height: 250px;
    width: 250px;
  }

  .product_name {
    margin: 5px 0 5px;
  }

  .price {
    font-weight: 700;
    margin-bottom: 10px;
  }

  .btn_buy {
    width: 100%;
    cursor: pointer;
    transition: 300ms;
  }
  .btn_buy:hover,
  .btn_buy:focus {
    border: 1px solid #00ff22;
  }

  @media screen and (min-width: 485px) {
    min-height: 100%;
    margin: 20px 0 0 20px;
    width: calc((100% / 2) - 20px);

    :not(:last-child) {
      margin-bottom: 0;
    }

    .card_image {
      height: 180px;
      width: 180px;
    }
  }

  @media screen and (min-width: 1280px) {
    .card_image {
      height: 250px;
      width: 250px;
    }
  }
`;

export default CategoryItemsStyled;
