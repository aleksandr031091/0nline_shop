import styled from "styled-components";

const HomeSliderStyled = styled.div`
  position: relative;
  overflow: hidden;

  .slick-track {
    display: flex;
    padding: 10px 0;
  }

  .slick-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    list-style: none;
  }

  .btn_arrow {
    position: absolute;
    bottom: 45%;
    right: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    background: #008afc63;

    z-index: 50;
  }

  .btn_prev {
    position: absolute;
    bottom: 45%;
    left: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    background: #008afc63;

    z-index: 50;
  }

  .slider_icon {
    width: 15px;
    height: 15px;
    fill: #ffffff;
  }

  @media screen and (min-width: 480px) {
    .slider_icon {
      width: 20px;
      height: 20px;
      fill: #ffffff;
    }

    .btn_arrow {
      width: 50px;
      height: 50px;
    }

    .btn_prev {
      width: 50px;
      height: 50px;
    }
  }
`;

export default HomeSliderStyled;
