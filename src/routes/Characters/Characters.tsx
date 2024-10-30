import PaginationComponent from "@/components/PaginationComponent"
import { CharachterProps, Info } from "@/types/characters"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CharacterStatus from "./CharacterStatus"

export default function Characters() {
  const [characters, setCharacters] = useState<CharachterProps[]>([])
  const [info, setInfo] = useState<Info>({
    count: null,
    next: '',
    pages: 0,
    prev: '',
  })

  const [apiUrl, setApiUrl] = useState<string>(`https://rickandmortyapi.com/api/character`);
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const { pageIndex } = useParams<string>();

  useEffect(() => {
    const page = pageIndex ? Number(pageIndex) : 1; // Define página padrão como 1
    setApiUrl(`https://rickandmortyapi.com/api/character?page=${page}`);
  }, [pageIndex]);

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json().then(response => response))
      .then(data => {
        setCharacters(data.results)
        setInfo(data.info)
      })
      .finally(() => { setIsLoading(true) })
  }, [apiUrl])

  if (!isLoading) {
    return <div className="">Carregando</div>
  }

  return (
    <div className="flex-col gap-5">
      <h1 className="font-bold text-3xl pb-5">
        Personagens
      </h1>
      {info &&
        <div className="flex justify-between items-center px-4">
          <span>Jonas</span>
          <div className="flex justify-center items-center">
            <PaginationComponent pages={info.pages} />
          </div>
        </div>
      }
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 p-4">
        {characters.map((character) => (
          <div className="rounded w-full" key={character.id}>
            <img src={character.image} alt={character.name} className="rounded w-full object-cover" />
            <div className="pt-2">
              <p className="truncate">{character.name}</p>
              <CharacterStatus status={character.status} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}