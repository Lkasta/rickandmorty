import api from "@/lib/api";
import { CharactersResponseProps } from "@/types/characters";

export async function getCharacters(): Promise<CharactersResponseProps> {
  const response = await api.get("/character");
  return response.data;
}
