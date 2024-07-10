import Pagination_ from "@/pages/Pagination/Pagination";
import ProductsCard from "./ProductsCard";

const Products = () => {
  return (
    <div className="mt-12 lg:px-24">
      <div className="flex justify-center flex-col items-center w-[590px] mx-auto">
        <h1 className="uppercase text-xl font-semibold text-[#2D3A4B]">
          NEW ARRIVAL
        </h1>
        <p className="capitalize text-sm font-semibold text-[#666666] mt-1 tracking-wider">
          Ecoshop always keeps discount for their customers. So Order now
          Without delay
        </p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 mt-16">
        <ProductsCard />
      </div>
      <div className="mt-10">
        <Pagination_ />
      </div>
    </div>
  );
};

export default Products;
