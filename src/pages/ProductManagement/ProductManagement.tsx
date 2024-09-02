import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const ProductManagement = () => {
  return (
    <div className="flex gap-x-6">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default ProductManagement;
