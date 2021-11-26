import { lazy } from "react";

export const mainRoutes = [
  {
    name: "home",
    path: "/",
    exact: true,
    component: lazy(() => import("../pages/home_page/HomePage")),
  },
  {
    name: "category",
    path: "/category",
    exact: true,
    component: lazy(() => import("../pages/category_page/CategoryPage")),
  },

  {
    // name: "products",
    path: "/products",
    exact: true,
    component: lazy(() => import("../pages/product_page/ProductPage")),
  },
];
