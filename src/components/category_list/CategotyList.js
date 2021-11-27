import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { setProduct } from "../../redux/products/productActions";
import { getAllProducts } from "../../redux/products/productsSelectors";
import CategotyListStyled from "./CategotyListStyled";

const CategotyList = ({ lastProducts }) => {
  const allProducts = useSelector(getAllProducts);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    setProductsState(allProducts.slice(0, pageSize));
  }, [allProducts]);

  const onHandleClickCard = (e) => {
    const targetProduct = e.currentTarget.childNodes;
    const product = allProducts.find(
      (product) => product.name === targetProduct[1].textContent
    );

    //   ========================set localStorage========================
    let localList = localStorage.getItem("productsIdList") || "[]";
    localList = JSON.parse(localList);
    localList.push(product.id);
    localStorage.setItem("productsIdList", JSON.stringify(localList));
    //   ========================set localStorage========================

    dispatch(setProduct(product));
    history.push("/products");
  };

  //   ========================load more========================
  const [productsState, setProductsState] = useState([]);
  const [page, setPage] = useState(2);
  const pageSize = 6;
  const onHandleClickMore = () => {
    let start = (page - 1) * pageSize;
    let end = start + pageSize;
    const productsCount = allProducts.slice(start, end);

    setPage((prev) => prev + 1);
    setProductsState((prev) => [...prev, ...productsCount]);
  };
  //   ========================load more========================

  return (
    <CategotyListStyled location={location.pathname}>
      <ul className="products_list">
        {productsState && location.pathname === "/category"
          ? productsState.map((product) => (
              <li
                key={product.id}
                className="products_list_card"
                onClick={onHandleClickCard}
              >
                <img src={product.image} alt="phone" className="card_image" />
                <h3 className="product_name">{product.name}</h3>
                <p className="price">price: {product.price} $</p>
                <button className="btn_buy">Buy</button>
              </li>
            ))
          : lastProducts &&
            location.pathname === "/" &&
            lastProducts.map((product) => (
              <li
                key={product.id}
                className="products_list_card"
                onClick={onHandleClickCard}
              >
                <img src={product.image} alt="phone" className="card_image" />
                <h3 className="product_name">{product.name}</h3>
                <p className="price">price: {product.price} $</p>
                <button className="btn_buy">Buy</button>
              </li>
            ))}
      </ul>
      {location.pathname === "/category" && (
        <button className="btn_list_more" onClick={onHandleClickMore}>
          More products
        </button>
      )}
    </CategotyListStyled>
  );
};

export default CategotyList;
