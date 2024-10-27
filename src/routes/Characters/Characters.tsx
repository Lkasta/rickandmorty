import { useEffect, useState } from "react";
import CharacterStatus from "./CharacterStatus";

type CharachtersProps = {
  id: number
  name: string
  image: string
  status: 'Alive' | 'Dead' | 'unknown';
}

export default function Characters() {
  const [characters, setCharacters] = useState<CharachtersProps[]>([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character?page=1')
      .then(response => response.json().then(response => response.results))
      .then(data => {
        setCharacters(data)
      })
  })

  return (
    <div className="flex-col gap-5">
      <h1 className="font-bold text-3xl pb-5">
        Personagens
      </h1>
      <div className="grid grid-cols-8 gap-5">
        {characters.map((character) => (
          <div className="ounded w-40" key={character.id}>
            <img src={character.image} alt={character.name} className="rounded" />
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