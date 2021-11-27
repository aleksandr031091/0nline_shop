import { combineReducers } from "redux";
import { productsReducer, productReducer } from "./products/productsReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  product: productReducer,
});

export default rootReducer;
