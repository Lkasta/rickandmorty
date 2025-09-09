import { useParams } from "react-router-dom";
import CharacterStatus from "./CharacterStatus";
import { useCharacter } from "@/service/characters/characters.hook";

export default function CharactersDetails() {
  const { characterId } = useParams();
  const { character, loading } = useCharacter(Number(characterId));

  if (loading || !character) {
    return <p className="p-5">Carregando</p>;
  }

  return (
    <div className="h-full">
      <div className="flex gap-3 h-full divide-x">
        <div className="flex flex-col rounded-lg overflow-hidden gap-5">
          <img
            className="rounded-lg w-64"
            src={character?.image}
            alt={`${character?.name} image profile`}
          />
          <div className="flex flex-col pt-2 gap-2">
            <p className="text-3xl font-medium">{character?.name}</p>
            <CharacterStatus status={character.status} size="md" />
          </div>
        </div>
      </div>
    </div>
  );
}
