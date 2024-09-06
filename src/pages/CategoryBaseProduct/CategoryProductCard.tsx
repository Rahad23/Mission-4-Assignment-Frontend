import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { Link } from "react-router-dom";

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

interface CategoryProductCardProps {
  data: Product;
}

const CategoryProductCard: React.FC<CategoryProductCardProps> = ({ data }) => {
  return (
    <Card key={data._id} className="">
      <img src={data.productImg} className=" mx-auto  box-border" alt="" />
      <CardContent className="mt-5">
        <div>
          <h1 className="text-[#2D3A4B] font-bold">Name: {data.name}</h1>
          <h1 className="text-[#2D3A4B] font-bold">
            Category: {data.category.name}
          </h1>
          <h1 className="text-[#2D3A4B] font-bold">Price: ${data.price}</h1>
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
  );
};

export default CategoryProductCard;
