import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetCategoryQuery } from "@/redux/features/category/Category";
import { useEffect, useState } from "react";

interface SortingProductCategoryProps {
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

interface CategoryData {
  name: string;
  stock: number;
  __v: number;
  _id: string;
}

const SortingSelectior: React.FC<SortingProductCategoryProps> = ({
  setCategory,
}) => {
  const { data, isLoading } = useGetCategoryQuery(undefined);
  const [categoryValue, setCategoryValue] = useState("");

  useEffect(() => {
    setCategory(categoryValue);
  }, [categoryValue]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  // const getCategory = (value: string) => {
  //   setCategory(value);
  // };
  return (
    <div className="flex gap-x-0 items-center">
      <Select onValueChange={(value) => setCategoryValue(value)}>
        <SelectTrigger className="w-[180px] rounded-none ring-0 focus:ring-0">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Category</SelectLabel>
            {data?.data?.map((data: CategoryData) => (
              <SelectItem
                key={data._id}
                className="cursor-pointer capitalize"
                value={data.name}
              >
                {data.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SortingSelectior;
