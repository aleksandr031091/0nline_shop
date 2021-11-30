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
        {product.isSale ? (
          <div className="sale_price_box">
            <p className="old_price">{product.price} $</p>
            <p className="product_price sale_price">{product.salePrice} $</p>
          </div>
        ) : (
          <div>
            <p className="product_price">{product.price} $</p>
          </div>
        )}
        <button className="btn_buy">Buy</button>
        {product.isSale && <span className="product_sale">sale</span>}
      </div>
    </ProductStyled>
  );
};

export default Product;
