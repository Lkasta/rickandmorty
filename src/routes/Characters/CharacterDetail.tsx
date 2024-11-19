import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CharacterStatus from "./CharacterStatus";
import { Separator } from "@radix-ui/react-separator";
interface charcterProps {
  created: Date
  episode: []
  gender: "female" | "male" | "genderless" | "unknown"
  id: number
  image: string
  location: []
  name: string
  origin: string
  species: string
  status: 'Alive' | 'Dead' | 'unknown'
  type: string
  url: string
}

export default function CharacterDetail() {
  const { characterId } = useParams();
  const [isLaoding, setIsLoading] = useState(Boolean)
  const [character, setCharacter] = useState<charcterProps>()

  const apiUrl = `https://rickandmortyapi.com/api/character/${characterId}`

  useEffect(() => {
    fetch(apiUrl)
      .then(response => response.json().then(response => response))
      .then(data => {
        setCharacter(data)
      })
      .finally(() => { setIsLoading(true) })
  }, [apiUrl])

  if (!isLaoding) {
    return <p className="p-5">Carregando</p>
  }

  return (
    <div className="h-full">
      <div className="flex  gap-3 h-full divide-x">
        <div className="flex flex-col p-5 rounded-lg overflow-hidden gap-5">
          <img
            className="rounded-lg w-64"
            src={character?.image}
            alt={`${character?.name} image profile`}
          />
          <div className="flex flex-col pt-2 gap-2">
            <p className="text-3xl font-medium">{character?.name}</p>
            <CharacterStatus status={character?.status} size="md" />
          </div>

        </div>
      </div>
    </div>
  )

}