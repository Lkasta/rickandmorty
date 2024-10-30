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
  const [next, setNext] = useState(Number)
  const [prev, setPrev] = useState(Number)

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
      setNext(currentPage + 1)
    } else {
      setIsNext(false)
    }
    if (currentPage > 1) {
      setIsPrev(true)
      setPrev(currentPage - 1)
    } else {
      setIsPrev(false)
    }
  }, [currentPage, isNext, isPrev, pages,])


  return (
    <UIPagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={handlePrevious} />
        </PaginationItem>

        {isPrev ?
          <PaginationLink className="opacity-30 hover:opacity-100 transition-all" to={`/characters/${(currentPage - 1)}`}>
            {prev || 1}
          </PaginationLink> : null
        }

        <PaginationLink to={`/characters/${currentPage}`}>{currentPage || 1}</PaginationLink>

        {isNext ?
          <div className="flex">
            <PaginationItem>
              <PaginationLink className="opacity-30 hover:opacity-100 transition-all" to={`/characters/${currentPage + 1}`}>
                {next || 1}
              </PaginationLink>
            </PaginationItem>
          </div> : null
        }
        <PaginationItem>
          <PaginationNext onClick={handleNext} />
        </PaginationItem>
      </PaginationContent>
    </UIPagination>
  );
}
