import { combineReducers } from "redux";
import {
  productsReducer,
  productReducer,
  IsProductOutReducer,
} from "./products/productsReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  product: productReducer,
  isProductOut: IsProductOutReducer,
});

export default rootReducer;
