import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { IoCartOutline } from "react-icons/io5";
import CartItems from "./CartItems";
import { Badge } from "@/components/ui/badge";
import { useGetAddToCartProductQuery } from "@/redux/features/addToCart/AddToCart";

const AddToCart = () => {
  const { data } = useGetAddToCartProductQuery(undefined);

  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"secondary"} className="bg-white">
            <IoCartOutline className="text-2xl" />
            <Badge
              className={`absolute -top-3 right-0 bg-[#2D3A4B] ${
                data?.data?.length > 0 ? "block" : "hidden"
              }`}
            >
              {data?.data?.length}
            </Badge>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-80 mr-28 px-4 py-2 overflow-y-scroll no-scrollbar h-80">
          <CartItems />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default AddToCart;
