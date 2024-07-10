import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { FiSearch } from "react-icons/fi";

const SearchInput = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"secondary"} className="bg-white">
          <FiSearch className="text-2xl" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-80 mr-28 py-10 ">
        <DropdownMenuLabel className="text-lg px-2">
          Search Product
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="px-3">
          <form action="">
            <Input
              type="text"
              placeholder="Search..."
              className="focus:border-none"
            />
            <Button
              variant={"secondary"}
              className="mt-3 bg-[#FDE428] hover:bg-[#f0d71b] text-gray-950 font-semibold"
            >
              Find Product
            </Button>
          </form>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SearchInput;
