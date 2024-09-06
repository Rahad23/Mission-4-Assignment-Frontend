import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaSortDown } from "react-icons/fa";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useGetHomeProductQuery } from "@/redux/features/products/Products";
import { useState } from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import ProductEditDialog from "./ProductEditDialog";
import ProductDelete from "./ProductDelete";
import { useToast } from "@/components/ui/use-toast";
import { getCurrentFormattedDate } from "../ProductsDetails/TimeFormate";
import LoadingSpenar from "../LoadingSpenar/LoadingSpenar";

const ProductTable = () => {
  interface Category {
    _id: string;
    name: string;
    stock: number;
  }

  interface Product {
    _id: string;
    name: string;
    price: string;
    productImg: string;
    ratings: number;
    isAvailable: boolean;
    description: string;
    category: Category;
    createdAt: string;
    updatedAt: string;
  }

  const { toast } = useToast();
  const [tostDeleteProduct, setToastDeleteProduct] = useState(false);

  const { data, isLoading } = useGetHomeProductQuery(undefined);

  if (tostDeleteProduct) {
    toast({
      title: "Product Deleted successfully!",
      description: getCurrentFormattedDate(),
      style: { background: "#71f55d", color: "#2D3A4B" },
      //   action: (
      //     <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
      //   ),
    });
    setToastDeleteProduct(false);
  }

  return isLoading ? (
    <div className="mx-auto">
      <LoadingSpenar />
    </div>
  ) : (
    <div className="w-full px-7 max-h-[80vh] overflow-y-auto no-scrollbar lg:mt-0 mt-5">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-center">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.data?.result?.map((invoice: Product) => (
            <TableRow key={invoice._id}>
              <TableCell className="font-medium">
                <img className="w-16" src={invoice?.productImg} />
              </TableCell>
              <TableCell>{invoice?.category?.name}</TableCell>
              <TableCell>{invoice?.name}</TableCell>
              <TableCell className="flex items-center">
                <TbCurrencyTaka className="text-lg" />
                {invoice?.price}
              </TableCell>
              <TableCell className="w-[30%]">{invoice.description}</TableCell>

              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      Option
                      <FaSortDown />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 mr-14 px-3 ">
                    <DropdownMenuLabel className="px-0">
                      Action
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup className="flex flex-col gap-y-3">
                      <div className="cursor-pointer">
                        <ProductEditDialog id={invoice?._id} />
                      </div>
                      <div
                        className="cursor-pointer flex"
                        // onSelect={(e) => {
                        //   e.preventDefault();
                        // }}
                      >
                        <ProductDelete
                          id={invoice?._id}
                          isDelete={setToastDeleteProduct}
                        />
                      </div>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductTable;
