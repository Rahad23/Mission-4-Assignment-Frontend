import { Button } from "@/components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Link } from "react-router-dom";
import MakeProductDialog from "./MakeProductDialog";

const Sidebar = () => {
  return (
    <Card className="w-[250px] h-screen rounded-none border-[1px] border-[#ddd] pt-0">
      <CardContent className="p-0">
        <ul className="text-[#2D3A4B]">
          <li className="text-lg font-semibold">
            <Link to={"make-product"}>
              <Button className="bg-[#FDE428] hover:bg-[#FDE428] w-full py-1 px-1 text-xl rounded-none text-[#2D3A4B] font-semibold hover:border-[1px] hover:border-[#ffffff]">
                Create Product
              </Button>
            </Link>
          </li>
          <li className="text-lg font-semibold">
            <Link to={"all-product"}>
              <Button className="bg-[#FDE428] hover:bg-[#FDE428] w-full py-1 px-1 text-xl rounded-none text-[#2D3A4B] font-semibold hover:border-[1px] hover:border-[#ffffff]">
                Products
              </Button>
            </Link>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default Sidebar;
