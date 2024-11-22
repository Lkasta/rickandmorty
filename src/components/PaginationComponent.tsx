import {
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Pagination as UIPagination,
} from "@/components/ui/pagination"
import { Info } from "@/types/characters"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function PaginationComponent({ pages }: Info) {
  const navigate = useNavigate()
  const { pageIndex } = useParams<{ pageIndex: string }>()
  const currentPage = pageIndex ? Number(pageIndex) : 1
  const [isNext, setIsNext] = useState(false)
  const [isPrev, setIsPrev] = useState(false)

  const handleNext = () => {
    if (currentPage < pages) {
      setIsNext(false)
      navigate(`/characters/${currentPage + 1}`)
    }
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      setIsPrev(false)
      navigate(`/characters/${currentPage - 1}`)
    }
  }

  useEffect(() => {
    if (currentPage < pages) {
      setIsNext(true)
    } else {
      setIsNext(false)
    }
    if (currentPage > 1) {
      setIsPrev(true)
    } else {
      setIsPrev(false)
    }
  }, [currentPage, isNext, isPrev, pages,])


  return (
    <UIPagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious to="#"  onClick={handlePrevious} className="!border" />
        </PaginationItem>

        <PaginationItem className="!border rounded-lg">
          <PaginationLink to={`/characters/${currentPage}`}>{currentPage || 1}</PaginationLink>
        </PaginationItem>


        <div className="flex">
          <PaginationItem className="!border rounded-lg">
            <PaginationLink className="opacity-30 hover:opacity-100 transition-all" to={`/characters/${isNext ? currentPage + 1 : currentPage}`}>
              {isNext ? currentPage + 1 : "..."}
            </PaginationLink>
          </PaginationItem>
        </div>

        <PaginationItem>
          <PaginationNext onClick={handleNext} to="#" className="!border" />
        </PaginationItem>
      </PaginationContent>
    </UIPagination>
  );
}
