import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const ProductManagement = () => {
  return (
    <div className="flex gap-x-6 lg:flex-row flex-col">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default ProductManagement;
