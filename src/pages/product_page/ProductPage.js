import { useSelector } from "react-redux";
import { getProduct } from "../../redux/products/productsSelectors";
import SlickSlider from "../../components/slider/SlickSlider";
import Product from "../../components/product/Product";

const ProductPage = () => {
  const product = useSelector(getProduct);
  const isProduct = Object.keys(product);

  return (
    <>
      {isProduct.length ? <Product /> : null}
      <SlickSlider />
    </>
  );
};

export default ProductPage;
