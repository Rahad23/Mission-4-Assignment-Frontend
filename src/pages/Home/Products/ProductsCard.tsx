// import { Card } from "@/components/ui/card";
import { useGetHomeProductQuery } from "@/redux/features/products/Products";
// import productImg from "../../../assets/cartImg/item-img-1-1.jpg";
import { Button } from "@/components/ui/button";

import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { TbCurrencyTaka } from "react-icons/tb";

const ProductsCard = () => {
  const { data } = useGetHomeProductQuery(undefined);

  interface Category {
    name: string;
    stock: number;
    _id: string;
  }

  type TProductData = {
    _id: string;
    category: Category;
    name: string;
    productImg?: string;
    price: string;
    description: string;
    isAvailable: boolean;
  };

  return data?.data?.result?.map((data: TProductData) => (
    <Card key={data?._id} className="lg:w-[350px]  w-[320px] mx-auto">
      <CardHeader className="p-0">
        <img src={data?.productImg} alt="" />
      </CardHeader>
      <CardContent className="px-1 mt-1">
        <div>
          {data?.category?.stock === 0 ? (
            <h1 className="text-red-600">Out Of Stock</h1>
          ) : (
            <h1 className="text-green-600">Available</h1>
          )}
          <div className="mt-2 gap-y-0">
            <h1 className="text-lg font-semibold">
              <span className="text-base text-gray-700">Category:</span>{" "}
              {data?.category?.name}
            </h1>
            <h1 className="text-lg font-semibold">
              <span className="text-base text-gray-700">Name:</span>{" "}
              {data?.name}
            </h1>
            <h1 className="flex items-center text-lg font-semibold">
              <span className="text-base text-gray-700">Price:</span>{" "}
              <TbCurrencyTaka className="text-2xl" />
              {data?.price}
            </h1>
          </div>
        </div>
      </CardContent>
      <CardFooter className="w-full">
        <Link className="w-full" to={`/product-details/${data?._id}`}>
          <Button className="w-full hover:bg-[#FDE428] bg-[#FDE428] text-black text-lg font-semibold">
            View
          </Button>
        </Link>
      </CardFooter>
    </Card>
  ));
};

export default ProductsCard;
