import {
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Pagination as UIPagination,
} from "@/components/ui/pagination";
import { InfoProps } from "@/types/characters";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function PaginationComponent({ pages = 0 }: Partial<InfoProps>) {
  const [isNext, setIsNext] = useState(false);
  const [isPrev, setIsPrev] = useState(false);

  const navigate = useNavigate();
  const { pageIndex } = useParams<{ pageIndex: string }>();
  const currentPage = pageIndex ? Number(pageIndex) : 1;

  const handleNext = () => {
    if (currentPage < pages) {
      setIsNext(false);
      navigate(`/characters/${currentPage + 1}`);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setIsPrev(false);
      navigate(`/characters/${currentPage - 1}`);
    }
  };

  useEffect(() => {
    if (currentPage < pages) {
      setIsNext(true);
    } else {
      setIsNext(false);
    }
    if (currentPage > 1) {
      setIsPrev(true);
    } else {
      setIsPrev(false);
    }
  }, [currentPage, isNext, isPrev, pages]);

  return (
    <UIPagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            to="#"
            onClick={handlePrevious}
            className={`!border ${!isPrev && "opacity-20 cursor-default"}`}
          />
        </PaginationItem>

        <PaginationItem className="!border rounded-lg">
          <PaginationLink to={`/characters/${currentPage}`}>
            {currentPage || 1}
          </PaginationLink>
        </PaginationItem>

        <div className="flex">
          <PaginationItem className="!border rounded-lg">
            <PaginationLink
              className="opacity-50 hover:opacity-100 transition-all"
              to={`/characters/${isNext ? currentPage + 1 : currentPage}`}
            >
              {isNext ? currentPage + 1 : "..."}
            </PaginationLink>
          </PaginationItem>
        </div>

        <PaginationItem>
          <PaginationNext
            onClick={handleNext}
            to="#"
            className={`!border ${!isNext && "opacity-20 cursor-default"}`}
          />
        </PaginationItem>
      </PaginationContent>
    </UIPagination>
  );
}
