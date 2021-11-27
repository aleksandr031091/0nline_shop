import { useSelector } from "react-redux";
import { getProduct } from "../../redux/products/productsSelectors";
import ProductStyled from "./ProductStyled";

const Product = () => {
  const product = useSelector(getProduct);

  return (
    <ProductStyled>
      <div className="image_box">
        <img src={product.image} alt={product.name} />
      </div>
      <h3 className="product_name">{product.name}</h3>
      <p className="product_description">{product.description}</p>
      <div className="price_box">
        <p className="product_price">{product.price}</p>
        <button className="btn_buy">Buy</button>
      </div>
    </ProductStyled>
  );
};

export default Product;
