import Slider from "react-slick";
import sprite from "../../images/sprite.svg";
import sliderVideo from "../../video/bg.mp4";
import HomeSliderStyled from "./HomeSliderStyled";
const sliderData = {
  firsImage:
    "https://res.cloudinary.com/sahsa/image/upload/v1637953601/samples/landscapes/nature-mountains.jpg",
  secondImage:
    "https://res.cloudinary.com/sahsa/image/upload/v1637953596/samples/landscapes/architecture-signs.jpg",
};
const HomeSlider = () => {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <button className="btn_arrow" onClick={onClick}>
        <svg className="slider_icon">
          <use href={sprite + "#icon-right"}></use>
        </svg>
      </button>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <button className="btn_prev" onClick={onClick}>
        <svg className="slider_icon">
          <use href={sprite + "#icon-left"}></use>
        </svg>
      </button>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <HomeSliderStyled>
      <Slider {...settings}>
        <img src={sliderData.firsImage} alt={sliderData.firsImage} />
        <video autoPlay loop muted>
          <source src={sliderVideo} type="video/mp4" />
        </video>
        <img src={sliderData.secondImage} alt={sliderData.firsImage} />
      </Slider>
    </HomeSliderStyled>
  );
};

export default HomeSlider;