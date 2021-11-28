import styled from "styled-components";

const SliderStyled = styled.div`
  position: relative;
  text-align: center;
  overflow: hidden;

  .slick-track {
    display: flex;
    padding: 10px 0;
  }

  .slick-slide {
    padding: 10px;
    list-style: none;
  }

  .btn_arrow {
    position: absolute;
    bottom: 45%;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    background: #008afc63;
    z-index: 1;
  }

  .btn_prev {
    position: absolute;
    bottom: 45%;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    background: #008afc63;
    z-index: 1;
  }

  .slider_icon {
    width: 20px;
    height: 20px;
    fill: #fff;
  }

  .products_list_card {
    height: 100%;
    width: 100%;
    margin: 0 auto;
  }

  .home_slider_item {
    position: relative;
  }

  @media screen and (min-width: 1280px) {
    .card_image {
      height: 200px;
      width: 200px;
    }
  }
`;

export default SliderStyled;
