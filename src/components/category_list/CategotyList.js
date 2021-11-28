import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { setProduct } from "../../redux/products/productActions";
import { getAllProducts } from "../../redux/products/productsSelectors";
import CategoryItem from "./category_item/CategoryItem";
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
              <CategoryItem
                key={product.id}
                product={product}
                onHandleClickCard={onHandleClickCard}
              />
            ))
          : lastProducts &&
            location.pathname === "/" &&
            lastProducts.map((product) => (
              <CategoryItem
                key={product.id}
                product={product}
                onHandleClickCard={onHandleClickCard}
              />
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
