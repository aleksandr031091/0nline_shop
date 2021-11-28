import { useSelector } from "react-redux";
import CategotyList from "../../components/category_list/CategotyList";
import { getAllProducts } from "../../redux/products/productsSelectors";
import HomePageStyled from "./HomePageStyled";

const sliderData = {
  firstImage:
    "https://res.cloudinary.com/sahsa/image/upload/v1637953597/samples/landscapes/beach-boat.jpg",
  secondImage:
    "https://res.cloudinary.com/sahsa/image/upload/v1637953596/samples/landscapes/architecture-signs.jpg",
  sliderVideo:
    "https://res.cloudinary.com/sahsa/video/upload/v1638104290/test-shop/Social_Media_-_1360_rr3sqs.mp4",
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
      <CategotyList lastProducts={lastProducts} />
    </HomePageStyled>
  );
};

export default HomePage;
