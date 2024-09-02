import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Link } from "react-router-dom";

const Pagination_ = ({ paginationData, setPage }) => {
  const handlePageChange = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const newPage = Number(e.currentTarget.innerText);
    setPage(newPage);
  };

  return (
    <Pagination className={paginationData > 0 ? " " : "hidden"}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        {Array.from({ length: paginationData }, (_, i) => (
          <PaginationItem key={i}>
            <Link
              onClick={setPage(handlePageChange)}
              to="#"
              className="p-2 bg-[#2D3A4B] text-white"
            >
              {i + 1}
            </Link>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default Pagination_;
