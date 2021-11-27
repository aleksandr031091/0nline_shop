import { createReducer } from "@reduxjs/toolkit";
import { setProducts, setProduct } from "./productActions";

export const productsReducer = createReducer([], {
  [setProducts]: (_, { payload }) => payload,
});

export const productReducer = createReducer(
  {},
  {
    [setProduct]: (_, { payload }) => payload,
  }
);
