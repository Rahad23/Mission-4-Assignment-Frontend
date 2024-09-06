import { useGetSingleCategoryProductsQuery } from "@/redux/features/category/Category";
import { useParams } from "react-router-dom";
import CategoryProductCard from "./CategoryProductCard";
import LoadingSpenar from "../LoadingSpenar/LoadingSpenar";
// import SearchProductCategory from "./SearchProductCategory";
// import { useState } from "react";

const CategoryBaseProduct = () => {
  //   const [search, setSearch] = useState("");
  const { id } = useParams();

  interface Category {
    _id: string;
    name: string;
    stock: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }

  interface Product {
    _id: string;
    name: string;
    category: Category;
    stock: number;
    price: string;
    productImg: string;
    ratings: number;
    isAvailable: boolean;
    description: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }

  const { data, isLoading } = useGetSingleCategoryProductsQuery(id);

  return (
    // set loading
    isLoading ? (
      <LoadingSpenar />
    ) : (
      <div className="lg:px-24 px-7">
        <div className="mt-5">
          <h1 className="capitalize">
            category:{" "}
            <span className="capitalize text-lg font-semibold text-[#2D3A4B]">
              {data?.data?.category}
            </span>
          </h1>
          {/* <div className="mt-5">
            <SearchProductCategory setSearch={setSearch} searchText={search} />
          </div> */}
        </div>
        {data?.data?.result?.length === 0 ? (
          <div className="h-screen flex items-center justify-center">
            <h1 className="capitalize text-3xl font-semibold text-[#2D3A4B]">
              {data?.data?.category} Product Not Available
            </h1>
          </div>
        ) : (
          <div className="grid lg:grid-cols-4 grid-cols-1 mt-12 gap-5">
            {data?.data?.result?.map((data: Product) => (
              <CategoryProductCard key={data?._id} data={data} />
            ))}
          </div>
        )}
      </div>
    )
  );
};

export default CategoryBaseProduct;
