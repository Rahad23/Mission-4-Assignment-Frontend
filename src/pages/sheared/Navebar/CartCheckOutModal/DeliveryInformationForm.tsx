import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCartOrderPostMutation } from "@/redux/features/addToCart/AddToCart";
import { z, ZodIssue } from "zod";
import {
  resetCartOrderState,
  setCategoryId,
  setDeliveryAddress,
  setEmail,
  setName,
  setOrderProduct,
  setPhoneNumber,
  setPrice,
} from "@/redux/features/addToCart/AddToCartSlice";

import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { orderAddToCartSchema } from "./OrderDataValidation";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { getCurrentFormattedDate } from "@/pages/ProductsDetails/TimeFormate";

interface Category {
  name: string;
  stock: number;
  _id: string;
}

interface Product {
  name: string;
  price: string;
  productImg: string;
  _id: string;
}

interface DeliveryProduct {
  category: Category;
  productId: Product;
  price: string;
  quantity: number;
  __v: number;
  _id: string;
}

interface DeliveryInformationFormType {
  product: DeliveryProduct[];
  setDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeliveryInformationForm: React.FC<DeliveryInformationFormType> = ({
  product,
  setDialogOpen,
}) => {
  const dispatch = useAppDispatch();
  const cartOrder = useAppSelector((state: RootState) => state.cartOrder);
  const [cartOrderPost] = useCartOrderPostMutation();
  const { toast } = useToast();
  const [zodError, setZodError] = useState<ZodIssue[]>([]);

  const categories = product
    ?.map((data) => ({ id: data?.category?._id }))
    ?.filter((id, index, self) => id && self.indexOf(id) === index);

  const products_ = product
    ?.map((data: DeliveryProduct) => ({
      id: data?.productId?._id,
      quantity: data?.quantity,
    }))
    ?.filter((item) => item.id);

  const subtotal = product?.reduce((total, item) => {
    return total + (Number(item?.price) || 0);
  }, 0);

  const setOrderDataDispatch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setName(e.target.value));
    dispatch(setPrice(subtotal));
    dispatch(setOrderProduct(products_));
    dispatch(setCategoryId(categories));
  };

  const orderParcess = async () => {
    try {
      const resultValidation = orderAddToCartSchema.parse(cartOrder);
      if (resultValidation) {
        const result = await cartOrderPost(cartOrder);
        if (result?.data?.success) {
          toast({
            title: "Order successfully!",
            description: getCurrentFormattedDate(),
            style: { background: "#7af59b", color: "#2D3A4B" },
            //   action: (
            //     <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
            //   ),
          });
          dispatch(resetCartOrderState());
          setDialogOpen(false);
        }
      }
    } catch (e) {
      if (e instanceof z.ZodError) {
        setZodError(e.errors);
      }
    }
  };

  return (
    <div className="p-3 flex flex-col gap-y-2">
      <div className="mb-3">
        <h1 className="text-xl text-gray-950 font-semibold pb-0 pt-5">
          Write Your Address
        </h1>
        <hr className="text-[#ddd]" />
      </div>
      <div className="flex flex-col">
        <Label htmlFor="name">Name:</Label>
        <Input
          type="text"
          id="name"
          value={cartOrder.name}
          className="focus:ring-0 focus:outline-none  !ring-0 !focus:ring-0 !focus:outline-none   !shadow-none rounded-none mt-1"
          onChange={setOrderDataDispatch}
        />
        <span className="text-red-600">
          {zodError?.find((err) => err.path[0] === "name")?.message}
        </span>
      </div>
      <div className="flex flex-col">
        <Label htmlFor="number">Phone number:</Label>
        <Input
          type="number"
          id="number"
          value={cartOrder.phoneNumber}
          className="focus:ring-0 focus:outline-none  !ring-0 !focus:ring-0 !focus:outline-none   !shadow-none rounded-none mt-1"
          onChange={(e) => dispatch(setPhoneNumber(e.target.value))}
        />
        <span className="text-red-600">
          {zodError?.find((err) => err.path[0] === "phoneNumber")?.message}
        </span>
      </div>
      <div className="flex flex-col">
        <Label htmlFor="email">Email:</Label>
        <Input
          id="email"
          value={cartOrder.email}
          className="focus:ring-0 focus:outline-none  !ring-0 !focus:ring-0 !focus:outline-none   !shadow-none rounded-none mt-1"
          onChange={(e) => dispatch(setEmail(e.target.value))}
        />
        <span className="text-red-600">
          {zodError?.find((err) => err.path[0] === "email")?.message}
        </span>
      </div>
      <div className="flex flex-col">
        <Label htmlFor="da">Delivery address:</Label>
        <Textarea
          className="focus:ring-0 focus:outline-none  !ring-0 !focus:ring-0 !focus:outline-none   !shadow-none rounded-none mt-1"
          value={cartOrder.deliveryAddress}
          placeholder="Type your delivery address"
          onChange={(e) => dispatch(setDeliveryAddress(e.target.value))}
        />
        <span className="text-red-600">
          {zodError?.find((err) => err.path[0] === "deliveryAddress")?.message}
        </span>
      </div>
      <Button
        className="bg-[#2D3A4B] text-white text-lg hover:bg-[##2D3A4B] hover:text-white uppercase rounded-md mt-5"
        variant={"outline"}
        onClick={orderParcess}
      >
        Submit
      </Button>
    </div>
  );
};

export default DeliveryInformationForm;
