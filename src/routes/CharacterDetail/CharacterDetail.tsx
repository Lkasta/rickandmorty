import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
    return <p className="">Carregando</p>
  }

  return (
    <div className="">
      {character?.name}
    </div>
  )

}