import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/products/productActions";
import products from "../products.json";
import Header from "./header/Header";
import Main from "./main/Main";
import { useHistory } from "react-router";

const App = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(setProducts(products));
  }, [dispatch, history]);

  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default App;
