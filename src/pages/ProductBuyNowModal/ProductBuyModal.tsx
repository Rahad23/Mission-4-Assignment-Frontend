import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { TbCurrencyTaka } from "react-icons/tb";
import DeliveryInformationForm from "./DeliveryInformationForm";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import {
  setCategoryId,
  setDeliveryAddress,
  setEmail,
  setName,
  setPhoneNumber,
  setPrice,
  setProductId,
  setQuantity,
} from "../../redux/features/orders/OrdersSlice";
import { orderSchema } from "./OrderDataValidation";
import { RootState } from "../../redux/store";
import { z, ZodIssue } from "zod";
import { useState } from "react";
import { useMakeOrderMutation } from "../../redux/features/orders/Oders";
import { Loader2 } from "lucide-react";

interface Category {
  category: string;
  name: string;
  stock: number;
  _id: string;
}

interface Product {
  description: string;
  isAvailable: boolean;
  name: string;
  category: Category;
  price: string;
  productImg: string;
  ratings: number;
  __v: number;
  _id: string;
}

interface ByProductData {
  data: Product;
  message: string;
  success: boolean;
}
interface ProductProps {
  data: ByProductData;
}
const ProductBuyModal: React.FC<ProductProps> = ({ data }) => {
  const [zodError, setZodError] = useState<ZodIssue[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(
    data?.data?.category?.stock === 0 ? false : true
  );
  const dispatch = useAppDispatch();
  const order = useAppSelector((state: RootState) => state.order);
  const [makeOrder, { isLoading: orderSubmitLoading }] = useMakeOrderMutation();

  const submitOrder = async () => {
    dispatch(setProductId(data?.data?._id));
    dispatch(setCategoryId(data?.data?.category?._id));
    dispatch(setPrice(Number(data?.data?.price)));
    dispatch(setQuantity(1));

    try {
      // Validate the order data
      const resultValidation = orderSchema.parse(order);
      if (resultValidation) {
        setZodError([]);
        const result = await makeOrder(order);
        if (result?.data.success) {
          setIsDialogOpen(false);
          dispatch(setProductId(""));
          dispatch(setCategoryId(""));
          dispatch(setPrice(0));
          dispatch(setQuantity(0));
          dispatch(setDeliveryAddress(""));
          dispatch(setEmail(""));
          dispatch(setPhoneNumber(""));
          dispatch(setName(""));
        }
      }
    } catch (e) {
      if (e instanceof z.ZodError) {
        setZodError(e.errors);
        setIsDialogOpen(true);
      }
    }
  };

  return (
    <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <AlertDialogTrigger asChild>
        <Button
          disabled={data?.data?.category?.stock === 0}
          className="capitalize bg-[#2D3A4B] rounded-none mt-4"
        >
          Buy-Now
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-h-[80vh] overflow-y-auto">
        <AlertDialogHeader>
          <AlertDialogTitle>
            <span className="text-lg font-semibold text-red-600">
              Only Cash on Delivery Available.
            </span>
          </AlertDialogTitle>
          <AlertDialogDescription>
            <div>
              <img
                className="w-[400px] mx-auto"
                src={data?.data.productImg}
                alt=""
              />
              <div className="px-8 mt-5">
                <h1 className="text-base font-semibold text-gray-950">
                  Product Category:{" "}
                  <span className="text-green-600">
                    {data.data.category.name}
                  </span>
                </h1>
                <h1 className="text-base font-semibold text-gray-950">
                  Product Name:{" "}
                  <span className="text-green-600">{data?.data?.name}</span>
                </h1>
                <h1 className="text-base font-semibold text-gray-950 flex items-center">
                  Product Price:{" "}
                  <span className="text-green-600 flex items-center">
                    {" "}
                    <TbCurrencyTaka className="text-lg" /> {data.data.price}
                  </span>
                </h1>
              </div>
            </div>
            <div>
              <DeliveryInformationForm zodErrorData={zodError} />{" "}
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          {orderSubmitLoading ? (
            <Button className="capitalize bg-[#2D3A4B] rounded-none mt-4 flex gap-x-2 items-center cursor-default">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              wait
            </Button>
          ) : (
            <Button onClick={submitOrder}>Confirm</Button>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ProductBuyModal;
