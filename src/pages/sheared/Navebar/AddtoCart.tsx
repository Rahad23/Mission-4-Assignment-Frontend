import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { IoCartOutline } from "react-icons/io5";
import CartItems from "./CartItems";

const AddToCart = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"secondary"} className="bg-white">
          <IoCartOutline className="text-2xl" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 mr-28 px-4 py-2">
        <CartItems />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AddToCart;
