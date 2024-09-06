import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { useGetHomeProductQuery } from "@/redux/features/products/Products";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";

const SearchInput = () => {
  interface Category {
    name: string;
    stock: number;
    _id: string;
  }

  interface Products {
    category: Category;
    createdAt: string;
    description: string;
    isAvailable: boolean;
    name: string;
    price: string;
    productImg: string;
    ratings: number;
    updatedAt: string;
    _id: string;
  }

  const [search, setSearch] = useState("");

  const { data, isLoading } = useGetHomeProductQuery({ search });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"secondary"} className="bg-white">
          <FiSearch className="text-2xl" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 mr-28 py-10 ">
        <DropdownMenuLabel className="text-lg px-2">
          {search ? (
            <h1 className="capitalize">
              search result:-{" "}
              <span className="text-green-600">
                {data?.data?.result.length}
              </span>
            </h1>
          ) : (
            <h1>Search Product</h1>
          )}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="px-3">
          <Input
            type="text"
            placeholder="Search..."
            value={search}
            className="focus:border-none"
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="flex gap-x-4">
            {search && (
              <Button
                variant={"secondary"}
                className="mt-3 bg-red-500 hover:bg-red-600 text-white font-semibold"
                onClick={() => setSearch("")}
              >
                Clear
              </Button>
            )}
          </div>
        </div>
        <div className="mt-4 overflow-x-scroll no-scrollbar h-[200px]">
          {isLoading
            ? "loading"
            : search &&
              data?.data?.result?.map((data: Products) => (
                <Link to={`/product-details/${data?._id}`}>
                  <Card key={data?._id}>
                    <CardContent className="p-0 flex items-center gap-x-4">
                      <div>
                        <img className="w-24" src={data?.productImg} alt="" />
                      </div>
                      <div className="flex flex-col py-1">
                        <span className="text-sm">
                          Category:{" "}
                          <span className="font-bold capitalize">
                            {data?.category?.name}
                          </span>
                        </span>
                        <span className="text-sm">
                          Name:{" "}
                          <span className="font-bold capitalize">
                            {data?.name}
                          </span>
                        </span>
                        <span className="text-sm">
                          Price:{" "}
                          <span className="font-bold capitalize">
                            {data?.price}
                          </span>
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SearchInput;
