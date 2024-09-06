import { Button } from "@/components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Card className="lg:w-[250px] w-full lg:h-screen h- rounded-none lg:border-[1px] lg:border-[#ddd] border-none pt-0 ">
      <CardContent className="p-0">
        <ul className="text-[#2D3A4B] lg:flex grid lg:flex-col grid-cols-1 lg:gap-0 gap-1">
          <li className="text-lg font-semibold lg:w-full w-[80%] mx-auto">
            <Link to={"make-product"}>
              <Button className="bg-[#FDE428] hover:bg-[#FDE428] w-full py-1 px-1 text-xl rounded-none text-[#2D3A4B] font-semibold hover:border-[1px] hover:border-[#ffffff]">
                Create Product
              </Button>
            </Link>
          </li>
          <li className="text-lg font-semibold lg:w-full w-[80%] mx-auto">
            <Link to={"all-product"}>
              <Button className="bg-[#FDE428] hover:bg-[#FDE428] w-full py-1 px-1 text-xl rounded-none text-[#2D3A4B] font-semibold hover:border-[1px] hover:border-[#ffffff]">
                Products
              </Button>
            </Link>
          </li>
          <li className="text-lg font-semibold lg:w-full w-[80%] mx-auto">
            <Link to={"category"}>
              <Button className="bg-[#FDE428] hover:bg-[#FDE428] w-full py-1 px-1 text-xl rounded-none text-[#2D3A4B] font-semibold hover:border-[1px] hover:border-[#ffffff]">
                Make-Category
              </Button>
            </Link>
          </li>
          <li className="text-lg font-semibold lg:w-full w-[80%] mx-auto">
            <Link to={"all-category"}>
              <Button className="bg-[#FDE428] hover:bg-[#FDE428] w-full py-1 px-1 text-xl rounded-none text-[#2D3A4B] font-semibold hover:border-[1px] hover:border-[#ffffff]">
                All-Category
              </Button>
            </Link>
          </li>
          <li className="text-lg font-semibold lg:w-full w-[80%] mx-auto">
            <Link to={"ad-management"}>
              <Button className="bg-[#FDE428] hover:bg-[#FDE428] w-full py-1 px-1 text-xl rounded-none text-[#2D3A4B] font-semibold hover:border-[1px] hover:border-[#ffffff] capitalize">
                Make-ad
              </Button>
            </Link>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default Sidebar;
