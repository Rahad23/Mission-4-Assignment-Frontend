import { Input } from "@/components/ui/input";

import { IoCloseSharp, IoSearchOutline } from "react-icons/io5";
interface SearchProductCategoryProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>; // Type for setSearch function
  searchText: string; // Type for searchText
}
const SearchProductCategory: React.FC<SearchProductCategoryProps> = ({
  setSearch,
  searchText,
}) => {
  const clearSearch = () => {
    setSearch("");
  };

  return (
    <div className="flex items-center">
      <div className="relative w-80">
        <Input
          value={searchText}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className=""
        />
        <IoSearchOutline className="absolute top-[27%] font-semibold text-[#2D3A4B] right-[17px] text-xl" />
      </div>
      {searchText && (
        <IoCloseSharp
          onClick={clearSearch}
          className="text-2xl ml-3 text-red-500 cursor-pointer"
        />
      )}
    </div>
  );
};

export default SearchProductCategory;
