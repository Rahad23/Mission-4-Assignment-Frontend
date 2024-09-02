import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  useGetProductCategoryQuery,
  useGetProductQuery,
} from "@/redux/features/products/Products";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import SortingSelectior from "./SortingCategory";
import SortingPrice from "./SortingPrice";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import SortingPriceLowToHigh from "./SortingPriceLowToHigh";

const ProductCard = () => {
  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [category, setCategory] = useState("");
  const [priceSorting, setPriceSorting] = useState("");

  const { data, isLoading } = useGetProductQuery({
    search: search,
  });

  //product listing sorting

  const clearSorting = () => {
    setPriceRange("");
    setCategory("");
    setPriceSorting("");
  };

  const clearSearch = () => {
    setSearch("");
  };

  //filter category data
  const { data: categoryData } = useGetProductCategoryQuery({
    priceRange,
    category,
    priceSorting,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }
  const products = data.data?.result;

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="relative w-80">
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className=""
            />
            <IoSearchOutline className="absolute top-[27%] font-semibold text-[#2D3A4B] right-[17px] text-xl" />
          </div>
          {search && (
            <IoCloseSharp
              onClick={clearSearch}
              className="text-2xl ml-3 text-red-500 cursor-pointer"
            />
          )}
        </div>

        <div>
          <div className="flex items-center">
            <SortingSelectior setCategory={setCategory} />

            <SortingPrice setPriceRange={setPriceRange} />

            {(priceRange || category) && (
              <IoCloseSharp
                onClick={clearSorting}
                className="text-3xl ml-3 text-red-500 cursor-pointer"
              />
            )}
          </div>
          <div className="mt-3 flex items-center gap-x-1">
            <span className="font-semibold text-gray-950">Price:-</span>{" "}
            <SortingPriceLowToHigh setPriceSorting={setPriceSorting} />
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h1 className="uppercase text-center text-xl font-semibold text-[#2D3A4B]">
          All Products
        </h1>
        <div className="lg:px-24 mt-10 grid grid-cols-4 gap-4">
          {(categoryData?.data?.result?.length === 0 && search === "") ||
          search !== ""
            ? products?.map((data) => (
                <Card key={data._id} data-aos="fade-in">
                  <img
                    src={data.productImg}
                    className="w-[200px] mx-auto  box-border"
                    alt=""
                  />
                  <CardContent className="mt-5">
                    <div>
                      <h1 className="text-[#2D3A4B] font-bold">
                        Name: {data.name}
                      </h1>
                      <h1 className="text-[#2D3A4B] font-bold">
                        Category: {data.category.name}
                      </h1>
                      <h1 className="text-[#2D3A4B] font-bold">
                        Price: ${data.price}
                      </h1>
                    </div>
                    <div className="justify-center flex items-center">
                      <Link to={`/product-details/${data?._id}`}>
                        <Button className="text-base h-[30px] rounded-sm text-[#fff]  bg-[#2D3A4B] hover:bg-[#2D3A4B] mt-5">
                          View
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))
            : categoryData?.data?.result?.map((data) => (
                <Card key={data._id} data-aos="fade-in">
                  <img
                    src={data.productImg}
                    className="w-[200px] mx-auto  box-border"
                    alt=""
                  />
                  <CardContent className="mt-5">
                    <div>
                      <h1 className="text-[#2D3A4B] font-bold">
                        Name: {data.name}
                      </h1>
                      <h1 className="text-[#2D3A4B] font-bold">
                        Category: {data.category.name}
                      </h1>
                      <h1 className="text-[#2D3A4B] font-bold">
                        Price: ${data.price}
                      </h1>
                    </div>
                    <div className="justify-center flex items-center">
                      <Link to={`/product-details/${data?._id}`}>
                        <Button className="text-base h-[30px] rounded-sm text-[#fff]  bg-[#2D3A4B] hover:bg-[#2D3A4B] mt-5">
                          View
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
