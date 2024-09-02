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

const SortingSelectior = ({ setCategory }) => {
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
            {data?.data?.map((data) => (
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
