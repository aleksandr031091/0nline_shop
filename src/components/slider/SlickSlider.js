import Slider from "react-slick";
import { useSelector } from "react-redux";
import { getAllProducts } from "../../redux/products/productsSelectors";
import CategoryItem from "../category_list/category_item/CategoryItem";
import SliderStyled from "./SliderStyled";
import sprite from "../../images/sprite.svg";
import useModal from "../../hooks/useModal";

const SlickSlider = () => {
  const allProducts = useSelector(getAllProducts);
  const [stateModal] = useModal();

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

  const countSliderPage = () => {
    if (stateModal.width < stateModal.breakPointMobile) {
      return 1;
    } else if (stateModal.width < stateModal.breakPointDesctop) {
      return 2;
    }
    return 5;
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: countSliderPage(),
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <SliderStyled>
      <Slider {...settings}>
        {allProducts.map((product) => (
          <CategoryItem key={product.id} product={product} />
        ))}
      </Slider>
    </SliderStyled>
  );
};

export default SlickSlider;
