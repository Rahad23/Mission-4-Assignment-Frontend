import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import DeliveryInformationForm from "./DeliveryInformationForm";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

interface Category {
  name: string;
  stock: number;
  _id: string;
}

interface Products {
  name: string;
  price: string;
  productImg: string;
  _id: string;
}
interface Products {
  name: string;
  price: string;
  productImg: string;
  _id: string;
}

interface CartCheckOutProducts {
  category: Category;
  productId: Products;
  quantity: number;
  __v: number;
  _id: string;
  price: string;
}

interface CartCheckOutProps {
  cartProduct: CartCheckOutProducts[];
}

const CartCheckOutModal: React.FC<CartCheckOutProps> = ({ cartProduct }) => {
  const subtotal = cartProduct?.reduce((total, item) => {
    return total + (Number(item?.price) || 0);
  }, 0);

  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <Button
          className="bg-[#2D3A4B] text-white text-lg hover:bg-[##2D3A4B] hover:text-white uppercase rounded-md"
          variant={"outline"}
          onClick={() => setDialogOpen(true)}
        >
          Check Out
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <span className="text-lg font-semibold text-red-600">
          Only Cash on Delivery Available.
        </span>

        <DialogHeader className="overflow-y-scroll no-scrollbar h-96">
          <div className="">
            <Card className="w-[350px] ">
              {cartProduct?.map((data) => (
                <div key={data?._id} className="flex gap-x-4 font-semibold">
                  <CardContent className="px-1 py-0">
                    <Avatar className="w-24 h-24 rounded-none">
                      <AvatarImage src={data?.productId?.productImg} />
                    </Avatar>
                  </CardContent>
                  <div>
                    <h1 className="text-sm">
                      <span className="text-base text-gray-600">Name:</span>{" "}
                      {data?.productId?.name}
                    </h1>
                    <h1 className="text-sm">
                      <span className="text-base text-gray-600">Price:</span>{" "}
                      {data?.price}
                    </h1>
                  </div>
                </div>
              ))}
            </Card>
            <div>
              <h1 className="text-sm text-gray-700 font-normal">
                Total:{" "}
                <span className="text-black text-3xl font-bold">
                  ৳<span className="font-normal text-lg">{subtotal}</span>
                </span>
              </h1>
            </div>
          </div>
          <DeliveryInformationForm
            product={cartProduct}
            setDialogOpen={setDialogOpen}
          />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CartCheckOutModal;
