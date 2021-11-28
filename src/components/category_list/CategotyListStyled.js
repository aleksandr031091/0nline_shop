import styled from "styled-components";
const CategotyListStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px 0 20px 0;

  .products_list {
    margin-bottom: 15px;
  }

  /* .products_list_card {
    position: relative;
    padding: 10px;
    width: 100%;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
    transition: 300ms;
  }

  .products_list_card:hover,
  .products_list_card:focus {
    transform: scale(1.03);
  }

  .products_list_card:not(:last-child) {
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
  } */

  .btn_list_more {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    width: 200px;
    color: #123;
    background-color: #fffb004c;
    border: 1px solid #ff3c00;
    border-radius: 5px;
    box-shadow: 0px 4px 19px 0px rgba(0, 8, 255, 0.2);
    cursor: pointer;
    transition: 300ms;
  }

  .btn_list_more:hover,
  .btn_list_more:focus {
    border: 1px solid #00ff22;
    transform: scale(1.1);
  }
  @media screen and (min-width: 485px) {
    .products_list {
      display: flex;
      flex-wrap: wrap;
      margin: -20px 0 20px -20px;
      width: 100%;
    }

    /* .card_image {
      height: 180px;
      width: 180px;
    }

    .products_list_card {
      min-height: 100%;
      margin: 20px 0 0 20px;
      width: calc((100% / 2) - 20px);
    }

    .products_list_card:not(:last-child) {
      margin-bottom: 0;
    } */
  }

  @media screen and (min-width: 1280px) {
    /* .card_image {
      height: 250px;
      width: 250px;
    } */
    .products_list_card {
      width: ${({ location }) =>
        location === "/"
          ? "calc((100% / 4) - 20px)"
          : "calc((100% / 3) - 20px)"};
    }
  }
`;

export default CategotyListStyled;
