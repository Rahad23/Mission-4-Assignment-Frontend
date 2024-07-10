import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import cartImg from "../../../assets/cartImg/cart-img-1.jpg";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const CartItems = () => {
  return (
    <Card className="border-[1px] border-[#fffffff1]">
      <CardHeader className="p-0">
        <div className="flex  gap-x-3">
          <Avatar className="w-24 h-24 rounded-none">
            <AvatarImage src={cartImg} />
          </Avatar>
          <div className="flex flex-col gap-y-1">
            <h1 className="uppercase font-semibold text-[#3A3A3A]">
              Wood Chair
            </h1>
            <p className="uppercase font-semibold">12.00 USD</p>
          </div>
        </div>
      </CardHeader>
      <hr className="mt-5" />
      <CardFooter className="justify-center items-center p-0">
        <p className="mt-3 text-lg text-[#3A3A3A] uppercase text-center">
          SUBTOTAL: <span className="ml-2">258.00 USD</span>
        </p>
      </CardFooter>
      <hr className="mt-2" />
      <div className="mt-7 flex gap-x-3 justify-center">
        <Button
          className="bg-[#2D3A4B] rounded-none text-white text-lg hover:bg-[##2D3A4B] hover:text-white uppercase rounded-md"
          variant={"outline"}
        >
          View Cart
        </Button>
        <Button
          className="bg-[#2D3A4B] rounded-none text-white text-lg hover:bg-[##2D3A4B] hover:text-white uppercase rounded-md"
          variant={"outline"}
        >
          Check Out
        </Button>
      </div>
    </Card>
  );
};

export default CartItems;
