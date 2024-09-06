import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetCategoryQuery } from "@/redux/features/category/Category";
import { FaSortDown } from "react-icons/fa";
import CategoryEdit from "./CategoryEdit";
import LoadingSpenar from "../LoadingSpenar/LoadingSpenar";
import CategoryDelete from "./CategoryDelete";

const AllCategory = () => {
  const { data, isLoading } = useGetCategoryQuery(undefined);

  interface SelectMapType {
    _id: string;
    name: string;
    stock: number;
    __v: number;
  }

  return isLoading ? (
    <div className="w-screen">
      <LoadingSpenar />
    </div>
  ) : (
    <div className="w-full lg:px-16 px-3 mt-7 lg:mt-0">
      {data?.data?.length === 0 ? (
        <h1 className="text-gray-950 text-xl text-center mt-5">
          Category Not Available
        </h1>
      ) : (
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Category Name</TableHead>
              <TableHead>Category Stock</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.data.map((data: SelectMapType) => (
              <TableRow key={data?._id}>
                <TableCell className="font-medium">
                  <span>{data?.name}</span>
                </TableCell>
                <TableCell key={data?._id} className="font-medium">
                  <span>{data?.stock}</span>
                </TableCell>
                <TableCell key={data?._id} className="font-medium text-right">
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
                      <DropdownMenuGroup className="flex flex-col">
                        <div className="cursor-pointer">
                          <CategoryEdit id={data?._id} />
                        </div>
                        <div
                          className="cursor-pointer flex"
                          // onSelect={(e) => {
                          //   e.preventDefault();
                          // }}
                        >
                          <CategoryDelete id={data?._id} />
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
      )}
    </div>
  );
};

export default AllCategory;
