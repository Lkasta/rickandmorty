import PaginationComponent from "@/components/PaginationComponent"
import { CharachterProps, Info } from "@/types/characters"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import CharacterStatus from "./CharacterStatus"
import loadAnimation from "../../assets/loadPortal-unscreen.gif"

export default function Characters() {
  const [characters, setCharacters] = useState<CharachterProps[]>([])
  const [info, setInfo] = useState<Info>({
    count: null,
    next: '',
    pages: 0,
    prev: '',
  })
  const [isLoading, setIsLoading] = useState(true)

  const apiBase = 'https://rickandmortyapi.com/api/character'

  const [apiUrl, setApiUrl] = useState<string>(`${apiBase}`);
  const { pageIndex } = useParams<string>();

  useEffect(() => {
    const page = pageIndex ? Number(pageIndex) : 1;
    setApiUrl(`${apiBase}?page=${page}`);
  }, [pageIndex]);

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json().then(response => response))
      .then(data => {
        setCharacters(data.results)
        setInfo(data.info)
      })
      .finally(() => { setIsLoading(false) })
  }, [apiUrl])

  if (isLoading) {
    return <div className="flex w-full h-full items-center justify-center">
      <img src={loadAnimation} alt="loadd animation" className="w-20" />
    </div>
  }

  return (
    <div className="flex h-full gap-5">
      <div className="flex-1 h-full flex flex-col">
        <div className="flex items-center justify-between ">
          <div className="flex sm:text-base gap-3 text-sm text-zinc-700">
            <p><strong>Total: </strong>{info.count}</p>
            <p><strong>Paginas: </strong>{info.pages}</p>
          </div>
          {info && (
            <div className="flex justify-between items-center py-2">
              <div className="ml-auto">
                <PaginationComponent pages={info.pages} />
              </div>
            </div>
          )}
        </div>
        <div className="flex-1 gap-4 overflow-y-auto flex-grow scroll-px-5">
          <div className="grid grid-cols-2 pb-16 h-auto md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-4 pr-5">
            {characters.map((character) => (
              <div className="rounded w-full cursor-pointer group" key={character.id}>
                <Link to={`/character/${character.id}`}>
                  <div className="rounded w-auto h-auto overflow-hidden relative">
                    <img src={character.image} alt={character.name} className="group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <div className="pt-2">
                    <p className="truncate">{character.name}</p>
                    <CharacterStatus status={character.status} size="sm" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

}