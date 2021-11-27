import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setProducts } from "../../redux/products/productActions";
import { getAllProducts } from "../../redux/products/productsSelectors";
import FormCategoryStyled from "./FormCategoryStyled";

const FormCategory = () => {
  const allProducts = useSelector(getAllProducts);
  const dispatch = useDispatch();

  const sortProducts = (text) => {
    let cost;

    switch (text) {
      case "ascending price":
        cost = allProducts.slice().sort(
          (a, b) =>
            a.price
              .split("")
              .filter((el) => el !== ",")
              .join("") -
            b.price
              .split("")
              .filter((el) => el !== ",")
              .join("")
        );
        break;

      case "descending price":
        cost = allProducts.slice().sort(
          (a, b) =>
            b.price
              .split("")
              .filter((el) => el !== ",")
              .join("") -
            a.price
              .split("")
              .filter((el) => el !== ",")
              .join("")
        );
        break;

      default:
        console.log("Invalid text");
    }
    return cost;
  };

  const onHandleClickSort = (e) => {
    if (e.target === e.currentTarget) return;
    const target = e.target;

    const resSortArrProducts = sortProducts(target.textContent);

    dispatch(setProducts(resSortArrProducts));
  };

  return (
    <FormCategoryStyled onClick={onHandleClickSort}>
      <button className="btn_sort">ascending price</button>
      <button className="btn_sort">descending price</button>
    </FormCategoryStyled>
  );
};

export default FormCategory;
