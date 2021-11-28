import { createReducer } from "@reduxjs/toolkit";
import { setProducts, setProduct, setIsProductOut } from "./productActions";

export const productsReducer = createReducer([], {
  [setProducts]: (_, { payload }) => payload,
});

export const productReducer = createReducer(
  {},
  {
    [setProduct]: (_, { payload }) => payload,
  }
);

export const IsProductOutReducer = createReducer(false, {
  [setIsProductOut]: (_, { payload }) => payload,
});
