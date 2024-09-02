import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { useGetOneProductQuery } from "@/redux/features/products/Products";
import { useParams } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import {
  useMakeAddToCartMutation,
  useUndoProductMutation,
} from "@/redux/features/addToCart/AddToCart";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { getCurrentFormattedDate } from "./TimeFormate";
import { Loader2 } from "lucide-react";
import ProductBuyModal from "../ProductBuyNowModal/ProductBuyModal";
import { TbCurrencyTaka } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
type cartData = {
  productId: string;
  category: string;
};

const ProductsDetails = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetOneProductQuery(id);
  const productId = data?.data?._id;
  const categoryId = data?.data?.category?._id;

  const [makeAddToCart, { isLoading: addToCartLoading }] =
    useMakeAddToCartMutation();
  // undo product mutation
  const [undoProduct, { isLoading: undoLoading }] = useUndoProductMutation();
  const { toast } = useToast();

  const handleAddToCart = async (productName: string) => {
    try {
      const data: cartData = {
        productId,
        category: categoryId,
      };

      const result = await makeAddToCart(data).unwrap();
      if (result.success) {
        toast({
          title: `${productName} Add-To-Cart Successfully!`,
          description: getCurrentFormattedDate(),
          action: (
            <ToastAction
              altText="Goto schedule to undo"
              onClick={() => undoAddToCart(productId)}
            >
              Undo
            </ToastAction>
          ),
          style: { width: "400px", height: "150px" },
        });
      } else {
        toast({
          title: (
            <div className="text-white font-medium">{result.data.message}</div>
          ),
          description: "",
          action: (
            <ToastAction
              altText="Goto schedule to undo"
              className="bg-slate-100"
              onClick={() => undoAddToCart(productId)}
            >
              Undo
            </ToastAction>
          ),
          style: { width: "400px", height: "150px", background: "#ff4d4d" },
        });
      }
    } catch (err) {
      console.error("Failed to add to cart:", err);
    }
  };

  const undoAddToCart = async (id: string) => {
    const result = await undoProduct(id);
    console.log(result);
  };

  //showing rating stars
  const ratingsStar = () => {
    const stars = [];
    for (let i = 0; i < data?.data?.ratings; i++) {
      stars.push(
        <FaStar
          key={i}
          className="cursor-pointer text-lg"
          title={`Rating-${data?.data?.ratings}`}
        />
      );
    }
    return stars;
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="px-24 mt-12">
      <Card className="w-[700px] py-7 mx-auto">
        <CardDescription>
          <CardHeader className="w-[400px] py-1">
            <h1 className={`font-semibold`}>
              <span className="text-green-600">
                {" "}
                {data?.data?.category?.stock !== 0 ? (
                  <div>
                    Stock:
                    <span className="text-gray-950 ml-1">
                      {data?.data?.category?.stock}
                    </span>
                  </div>
                ) : (
                  <span className="text-red-600">Out of stock</span>
                )}
              </span>{" "}
            </h1>
            <img src={data?.data.productImg} alt="" />
          </CardHeader>
          <CardDescription className="px-5 mt-3">
            <div className="flex flex-col gap-y-1">
              <h1 className="text-md font-semibold text-[#101316]">
                Product Name:{" "}
                <span className="text-[#2D3A4B] font-bold">
                  {data.data.name}
                </span>
              </h1>
              <h1 className="capitalize text-md font-semibold text-[#101316]">
                Category:{" "}
                <span className="text-[#2D3A4B] font-bold">
                  {data.data.category.name}
                </span>
              </h1>
              <h1 className="text-md font-semibold text-[#101316] flex items-center">
                Price:{" "}
                <span className="text-[#2D3A4B] font-bold flex items-center">
                  <TbCurrencyTaka className="text-lg" /> {data.data.price}
                </span>
              </h1>
              <div className="flex items-center text-yellow-500">
                {ratingsStar()}
              </div>
            </div>
            <div className="mt-3">
              <p className="text-gray-950 font-bold">
                Product Details: {data.data.description}
              </p>
            </div>
            <div className="mt-3 flex items-center gap-x-5">
              <ProductBuyModal data={data} />
              {addToCartLoading ? (
                <Button className="capitalize bg-[#2D3A4B] rounded-none mt-4 flex gap-x-2 items-center cursor-default">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Adding
                </Button>
              ) : (
                <Button
                  className="capitalize bg-[#2D3A4B] rounded-none mt-4 flex gap-x-2 items-center"
                  disabled={data?.data?.category?.stock === 0}
                  onClick={() => handleAddToCart(data?.data?.name)}
                >
                  <FaShoppingCart className="text-lg" /> Add-To-Cart
                </Button>
              )}
            </div>
          </CardDescription>
        </CardDescription>
      </Card>
    </div>
  );
};

export default ProductsDetails;
