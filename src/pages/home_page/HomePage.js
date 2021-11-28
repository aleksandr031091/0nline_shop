import { useSelector } from "react-redux";
import { getAllProducts } from "../../redux/products/productsSelectors";
import CategotyList from "../../components/category_list/CategotyList";
import HomeSlider from "../../components/homeSlider/HomeSlider";
import HomePageStyled from "./HomePageStyled";

const sliderData = {
  firsImage:
    "https://res.cloudinary.com/sahsa/image/upload/v1637953601/samples/landscapes/nature-mountains.jpg",
  secondImage:
    "https://res.cloudinary.com/sahsa/image/upload/v1637953596/samples/landscapes/architecture-signs.jpg",
};

const HomePage = () => {
  const allProducts = useSelector(getAllProducts);

  const localProducts = JSON.parse(localStorage.getItem("productsIdList"));
  const lastLocalProducts = localProducts && localProducts.slice(-4);

  const lastProducts =
    localProducts &&
    allProducts.filter((product) => lastLocalProducts.includes(product.id));

  return (
    <HomePageStyled>
      <HomeSlider sliderData={sliderData} />
      <CategotyList lastProducts={lastProducts} />
    </HomePageStyled>
  );
};

export default HomePage;
