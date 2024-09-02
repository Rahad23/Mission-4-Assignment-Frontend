// import { Card } from "@/components/ui/card";
import {
  useGetHomeProductQuery,
  useGetProductQuery,
} from "@/redux/features/products/Products";
import "./ProductsCardStyle/ProductsCard.css";
// import productImg from "../../../assets/cartImg/item-img-1-1.jpg";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProductsCard = () => {
  const { data, isLoading } = useGetHomeProductQuery(undefined);
  const [id, setId] = useState("");

  type TProductData = {
    _id: string;
    category: string;
    name: string;
    productImg?: string;
    price: string;
    description: string;
    isAvailable: boolean;
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return data.data?.result?.map((data: TProductData) => (
    <div
      key={data._id}
      className="card border-[1px] border-[#ddd] cursor-pointer"
    >
      <div className="image">
        <img src={data?.productImg} />
      </div>
      <div className="details">
        <div className="center relative">
          <h1>
            {data.name}
            <br />
            <span className="text-xs available">{data.category?.name}</span>
          </h1>
          <p>
            {data.description.length > 40
              ? data.description.slice(0, 100) + "..."
              : data.description}
          </p>
          <ul>
            <li>
              {" "}
              <Button className="capitalize bg-[#2D3A4B] rounded-none">
                Buy Now
              </Button>
            </li>
            <li>
              <Link
                to={`/product-details/${data._id}`}
                onClick={() => setId(data._id)}
              >
                <Button className="capitalize bg-[#2D3A4B] rounded-none">
                  Details
                </Button>
              </Link>
            </li>
          </ul>
          <p className="absolute top-0 left-1 text-xs">
            {data?.isAvailable ? (
              <span className="available font-semibold">Available</span>
            ) : (
              <span className="unavailable font-semibold">Unavailable</span>
            )}
          </p>
        </div>
      </div>
    </div>
  ));
};
// <Card key={data.id} className="rounded-none">
//   <img src={data.img} alt="" />
// </Card>
export default ProductsCard;
