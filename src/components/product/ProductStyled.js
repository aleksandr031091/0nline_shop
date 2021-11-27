import styled from "styled-components";

const ProductStyled = styled.div`
  padding: 20px 0;

  .image_box {
    max-width: 500px;
  }
  .product_name {
    margin: 5px 0 5px;
    font-weight: 500px;
    font-size: 30px;
  }

  .product_description {
    margin-bottom: 10px;
  }

  .price_box {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .product_price {
    font-weight: 700;
  }
  .btn_buy {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    width: 100px;
    color: #123;
    background-color: #fffb004c;
    border: 1px solid #ff3c00;
    border-radius: 5px;
    cursor: pointer;
    transition: 300ms;
  }

  .btn_buy:hover,
  .btn_buy:focus {
    border: 1px solid #00ff22;
    transform: scale(1.1);
  }

  @media screen and (min-width: 485px) {
    .price_box {
      justify-content: flex-start;
    }
    .product_price {
      margin-right: 20px;
    }
  }
`;

export default ProductStyled;
