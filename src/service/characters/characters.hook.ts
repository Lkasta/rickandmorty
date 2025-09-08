import { useEffect, useState } from "react";
import { getCharacters } from "./characters";
import { CharachterProps, InfoProps } from "@/types/characters";

export function useCharacters() {
  const [characters, setCharacters] = useState<CharachterProps[]>([]);
  const [info, setInfo] = useState<InfoProps>();
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const data = await getCharacters();

        setCharacters(data.results);
        setInfo(data.info);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error("Erro inesperado"));
        }
      } finally {
        setLoading(false);
      }
    }

    fetchCharacters();
  }, []);

  return { characters, info, error, loading };
}
