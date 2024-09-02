import App from "@/App";
import Main from "@/components/layout/Main";
import AllProducts from "@/pages/AllProducts/AllProducts";
import ProductsDetails from "@/pages/ProductsDetails/ProductsDetails";

import { createBrowserRouter } from "react-router-dom";
import ProductManagement from "../pages/ProductManagement/ProductManagement";
import ProductTable from "@/pages/ProductManagement/ProductTable";
import MakeProduct from "@/pages/ProductManagement/MakeProduct";

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
        ],
      },
    ],
  },
]);

export default router;
