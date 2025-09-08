import api from "@/lib/api";
import { CharactersResponseProps } from "@/types/characters";

export async function getCharacters(
  page = 1
): Promise<CharactersResponseProps> {
  const response = await api.get(`character/?page=${page}`);
  return response.data;
}
