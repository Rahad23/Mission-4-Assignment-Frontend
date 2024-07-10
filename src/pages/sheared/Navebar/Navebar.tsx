import { MenuIcon, MountainIcon } from "@/assets/icons/Icons";
import logo from "../../../assets/logo.png";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import AddToCart from "./AddtoCart";
import SearchInput from "./SearchInput";
import DropdownCategory from "./DropdownCategroy/DropdownCategory";

const Navebar = () => {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-[#FFFFFF] border-b-[1px] border-[#ddd] lg:px-28 ">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <a href="#" className="mr-6 hidden lg:flex">
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </a>
          <div className="grid gap-2 py-6">
            <a
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
            >
              Home
            </a>
            <a
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
            >
              About
            </a>
            <a
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
            >
              Services
            </a>
            <a
              href="#"
              className="flex w-full items-center py-2 text-lg font-semibold"
            >
              Contact
            </a>
          </div>
        </SheetContent>
      </Sheet>
      <a href="#" className="mr-6 hidden lg:flex">
        <img src={logo} alt="logo" height={"90%"} width={"90%"} />
        <span className="sr-only">Acme Inc</span>
      </a>
      <nav className="ml-auto hidden lg:flex gap-2">
        <a
          href="#"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
        >
          Home
        </a>
        <DropdownCategory />
        {/* <a
          href="#"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
        >
          Products
        </a> */}
        <a
          href="#"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
        >
          Product Management
        </a>
        <a
          href="#"
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
        >
          About Us
        </a>
        <div className="flex gap-x-1">
          <AddToCart />
          <SearchInput />
        </div>
      </nav>
    </header>
  );
};

export default Navebar;
