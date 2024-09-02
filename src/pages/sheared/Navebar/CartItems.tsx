import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  useGetAddToCartProductQuery,
  useUpdateProductQuantityMutation,
} from "@/redux/features/addToCart/AddToCart";
import { TbCurrencyTaka } from "react-icons/tb";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import RemoveProductCartDialog from "./RemoveProductAddToCartDialog/RemoveProductCartDialog";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// import { ToastAction } from "@/components/ui/toast";
const CartItems = () => {
  const { data, isLoading } = useGetAddToCartProductQuery(undefined);

  const [productId_, setProductId_] = useState("");
  const [updateProductQuantity, { isLoading: updateQuantityLoading }] =
    useUpdateProductQuantityMutation();
  type TUpdateQuantity = {
    action: "increase" | "decrease";
    id: string;
    quantity: number;
  };

  const subtotal = data?.data.reduce((total, item) => {
    return total + (Number(item?.price) || 0);
  }, 0);

  const updateQuantity = async (payload: TUpdateQuantity) => {
    setProductId_(payload.id);
    payload.quantity =
      payload.action === "increase"
        ? payload.quantity + 1
        : payload.quantity - 1;

    await updateProductQuantity(payload);
  };

  const outOfStockProduct =
    data?.data.find((data) => data?.category?.stock === 0)?.category?.stock ===
      0 && true;

  return (
    <Card className="border-[1px] border-[#fffffff1]">
      <div className="flex flex-col gap-y-1">
        {data?.data.map((data) => (
          <CardHeader
            key={data?._id}
            className={` border-[1px] border-gray-300 px-1 py-1 ${
              data?.category?.stock === 0 && "opacity-45"
            }`}
          >
            <div className="flex  gap-x-3 relative">
              <Link to={`/product-details/${data?.productId?._id}`}>
                <Avatar className="w-24 h-24 rounded-none">
                  <AvatarImage src={data?.productId?.productImg} />
                </Avatar>
              </Link>
              <div className="flex flex-col gap-y-1 py-2">
                <h1 className="uppercase font-semibold text-[#3A3A3A]">
                  {data?.productId?.name}
                </h1>
                <p className="uppercase font-semibold flex items-center">
                  <TbCurrencyTaka className="text-xl" />
                  {data?.price}
                </p>

                <div className="flex items-center gap-x-3 mt-1">
                  {data?.quantity === 1 ? (
                    <FiMinus className="cursor-pointer font-semibold text-red-700 hover:text-red-600" />
                  ) : (
                    <FiMinus
                      onClick={() =>
                        updateQuantity({
                          action: "decrease",
                          id: data?._id,
                          quantity: data?.quantity,
                        })
                      }
                      className="cursor-pointer font-semibold text-[#3A3A3A] hover:text-gray-950"
                    />
                  )}

                  <span className="h-6 w-6 shadow-lg border-[1px] border-[#ddd] flex items-center justify-center font-semibold text-black font-serif">
                    {updateQuantityLoading && productId_ === data?._id ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      data?.quantity
                    )}
                  </span>
                  {data?.category?.stock === data?.quantity ? (
                    <FiPlus
                      className="cursor-pointer font-semibold text-red-700 hover:text-red-600"
                      title={`Only stock ${data?.quantity} product in ${data?.category?.name} category`}
                    />
                  ) : (
                    <FiPlus
                      onClick={() =>
                        updateQuantity({
                          action: "increase",
                          id: data?._id,
                          quantity: data?.quantity,
                        })
                      }
                      className="cursor-pointer font-semibold text-[#3A3A3A] hover:text-gray-950"
                    />
                  )}
                </div>
              </div>
              <RemoveProductCartDialog id={data?.productId?._id} />
            </div>
          </CardHeader>
        ))}
      </div>
      <hr className="mt-5" />
      <CardFooter className="justify-center items-center p-0">
        <p className="mt-3 text-lg text-[#3A3A3A] uppercase text-center flex justify-center items-center">
          SUBTOTAL:{" "}
          <span className="ml-2 flex items-center">
            <TbCurrencyTaka className="text-2xl" />
            {subtotal}
          </span>
        </p>
      </CardFooter>
      <hr className="mt-2" />
      <div className="mt-4 flex gap-x-3 justify-center">
        {/* <Button
          className="bg-[#2D3A4B] rounded-none text-white text-lg hover:bg-[##2D3A4B] hover:text-white uppercase rounded-md"
          variant={"outline"}
        >
          View Cart
        </Button> */}
        {outOfStockProduct ? (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  className="bg-[#2D3A4B] text-white text-lg hover:bg-[##2D3A4B] hover:text-white uppercase rounded-md opacity-35"
                  variant={"outline"}
                >
                  Check Out
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-red-400">
                <p className="text-white font-semibold">
                  First remove out of stock product then checkout
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ) : (
          <Button
            className="bg-[#2D3A4B] text-white text-lg hover:bg-[##2D3A4B] hover:text-white uppercase rounded-md"
            variant={"outline"}
          >
            Check Out
          </Button>
        )}
      </div>
    </Card>
  );
};

export default CartItems;
