import App from "@/App";
import Main from "@/components/layout/Main";
import AllProducts from "@/pages/AllProducts/AllProducts";
import ProductsDetails from "@/pages/ProductsDetails/ProductsDetails";

import { createBrowserRouter } from "react-router-dom";
import ProductManagement from "../pages/ProductManagement/ProductManagement";
import ProductTable from "@/pages/ProductManagement/ProductTable";
import MakeProduct from "@/pages/ProductManagement/MakeProduct";
import CategoryBaseProduct from "@/pages/CategoryBaseProduct/CategoryBaseProduct";
import AboutUS from "@/pages/AboutUS/AboutUS";
import MakeCategory from "@/pages/CategoryManagement/MakeCategory";
import AllCategory from "@/pages/CategoryManagement/AllCategory";
import BenarAdManagement from "@/pages/BanarAdManagement/BannerAdManagement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/products",
        element: <AllProducts />,
      },
      {
        path: "/category/:id",
        element: <CategoryBaseProduct />,
      },
      {
        path: "/product-details/:id",
        element: <ProductsDetails />,
      },
      {
        path: "/product-management",
        element: <ProductManagement />,
        children: [
          {
            path: "/product-management",
            element: <ProductTable />,
          },
          {
            path: "make-product",
            element: <MakeProduct />,
          },
          {
            path: "all-product",
            element: <ProductTable />,
          },
          {
            path: "category",
            element: <MakeCategory />,
          },
          {
            path: "all-category",
            element: <AllCategory />,
          },
          {
            path: "ad-management",
            element: <BenarAdManagement />,
          },
        ],
      },
      {
        path: "/about-us",
        element: <AboutUS />,
      },
    ],
  },
]);

export default router;
