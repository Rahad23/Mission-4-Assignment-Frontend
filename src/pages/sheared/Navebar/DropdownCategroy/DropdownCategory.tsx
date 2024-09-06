import { Card, CardContent } from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useGetCategoryQuery } from "@/redux/features/category/Category";
import { Link } from "react-router-dom";

const DropdownCategory = () => {
  const { data } = useGetCategoryQuery(undefined);

  interface CategoryNavbar {
    name: string;
    stock: number;
    __v: number;
    _id: string;
  }

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Products-Category</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-0 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {data?.data?.map((component: CategoryNavbar) => (
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
  );
};

export default DropdownCategory;
