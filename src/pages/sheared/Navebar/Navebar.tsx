import { MenuIcon, MountainIcon } from "@/assets/icons/Icons";
import logo from "../../../assets/logo.png";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import AddToCart from "./AddtoCart";
import SearchInput from "./SearchInput";
import DropdownCategory from "./DropdownCategroy/DropdownCategory";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useGetCategoryQuery } from "@/redux/features/category/Category";
import { Card, CardContent } from "@/components/ui/card";

const Navebar = () => {
  const { data } = useGetCategoryQuery(undefined);

  interface Category {
    name: string;
    stock: number;
    __v: number;
    _id: string;
  }

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
          <Link to={""} className="mr-6 hidden lg:flex">
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <div className="grid gap-2 py-6">
            <Link
              to={"/"}
              className="flex w-full items-center py-2 text-lg font-semibold"
            >
              Home
            </Link>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="flex w-full items-center py-2 text-lg font-semibold px-0 bg-white">
                    Product-Category
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid  gap-3 p-4 w-[250px] md:grid-cols-2">
                      {data?.data?.map((component: Category) => (
                        <Link to={`/category/${component?._id}`}>
                          <Card
                            key={component._id}
                            className="rounded-none bg-[#ecd738] text-[#2D3A4B]"
                          >
                            <CardContent className="flex items-center justify-center py-2 px-2">
                              <span className="text-lg font-semibold capitalize">
                                {component.name}
                              </span>
                            </CardContent>
                          </Card>
                        </Link>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              to={"/product-management"}
              className="flex w-full items-center py-2 text-lg font-semibold"
            >
              Product-Management
            </Link>
            <Link
              to={"/about-us"}
              className="flex w-full items-center py-2 text-lg font-semibold"
            >
              About us
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <Link to={""} className="mr-6 hidden lg:flex">
        <img src={logo} alt="logo" height={"90%"} width={"90%"} />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <nav className="ml-auto hidden lg:flex gap-2">
        <Link
          to={"/"}
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
        >
          Home
        </Link>
        <DropdownCategory />
        <Link
          to={"/product-management"}
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
        >
          Product Management
        </Link>
        <Link
          to={"/about-us"}
          className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
        >
          About Us
        </Link>
        <div className="flex gap-x-1">
          <AddToCart />
          <SearchInput />
        </div>
      </nav>
    </header>
  );
};

export default Navebar;
