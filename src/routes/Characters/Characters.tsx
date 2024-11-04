import PaginationComponent from "@/components/PaginationComponent"
import { CharachterProps, Info } from "@/types/characters"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CharacterStatus from "./CharacterStatus"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import CheckboxComponent from "@/components/CheckboxComponent"

export default function Characters() {
  const [characters, setCharacters] = useState<CharachterProps[]>([])
  const [info, setInfo] = useState<Info>({
    count: null,
    next: '',
    pages: 0,
    prev: '',
  })

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
    // .finally(() => { setIsLoading(false) })
  }, [apiUrl])


  return (
    <div className="flex gap-5">
      <div className="flex-col p-5">
        <h1 className="font-bold text-3xl pb-5">
          Personagens
        </h1>
        <div className="bg-zinc-900 h-min rounded-lg">
          Teste
        </div>
      </div>
      <div className="flex-1 h-full flex flex-col overflow-hidden min-h-0">
        {info &&
          <div className="flex justify-between items-center p-5">
            <div className="ml-auto">
              <PaginationComponent pages={info.pages} />
            </div>
          </div>
        }
        <div className="flex-1 gap-4 min-h-0 overflow-y-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 h-max pr-5 pb-5">
            {characters.map((character) => (
              <div className="rounded w-full h-max" key={character.id}>
                <img src={character.image} alt={character.name} className="rounded w-full object-cover" />
                <div className="pt-2">
                  <p className="truncate">{character.name}</p>
                  <CharacterStatus status={character.status} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}