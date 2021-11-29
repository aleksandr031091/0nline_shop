import { useSelector } from "react-redux";
import { getAllProducts } from "../../redux/products/productsSelectors";
import CategotyList from "../../components/category_list/CategotyList";
import HomeSlider from "../../components/home_slider/HomeSlider";
import HomePageStyled from "./HomePageStyled";

const HomePage = () => {
  const allProducts = useSelector(getAllProducts);

  const localProducts = JSON.parse(localStorage.getItem("productsIdList"));
  const lastLocalProducts = localProducts && localProducts.slice(-4);

  const lastProducts =
    localProducts &&
    allProducts.filter((product) => lastLocalProducts.includes(product.id));

  return (
    <HomePageStyled>
      <HomeSlider />
      <CategotyList lastProducts={lastProducts} />
    </HomePageStyled>
  );
};

export default HomePage;
