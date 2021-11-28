import Slider from "react-slick";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setProduct } from "../../redux/products/productActions";
import { getAllProducts } from "../../redux/products/productsSelectors";
import CategoryItem from "../category_list/category_item/CategoryItem";
import SliderStyled from "./SliderStyled";
import sprite from "../../images/sprite.svg";
import useModal from "../../hooks/useModal";

const SlickSlider = ({ homePageState }) => {
  const allProducts = useSelector(getAllProducts);

  // ============================ slider ============================
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
  // ============================ slider ============================

  // ============================ click card ============================

  const dispatch = useDispatch();

  const onHandleClickCardSlider = (e) => {
    const targetProduct = e.currentTarget.childNodes;
    const product = allProducts.find(
      (product) => product.name === targetProduct[1].textContent
    );

    //   ======================== set localStorage ========================
    let localList = localStorage.getItem("productsIdList") || "[]";
    localList = JSON.parse(localList);
    localList.push(product.id);
    localStorage.setItem("productsIdList", JSON.stringify(localList));
    //   ======================== set localStorage ========================

    dispatch(setProduct(product));
  };
  // ============================ click card ============================

  return (
    <SliderStyled>
      <Slider {...settings}>
        {allProducts.map((product) => (
          <CategoryItem
            key={product.id}
            product={product}
            onHandleClickCard={onHandleClickCardSlider}
          />
        ))}
      </Slider>
    </SliderStyled>
  );
};

export default SlickSlider;
