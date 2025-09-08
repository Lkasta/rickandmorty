export type CharactersResponseProps = {
  info: InfoProps;
  results: CharacterProps[];
};

export type CharacterStatusProps = "Alive" | "Dead" | "unknown";

export interface CharacterProps {
  id: number;
  name: string;
  image: string;
  status: CharacterStatusProps;
  species: string;
  gender: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
}

export type InfoProps = {
  pageIndex: number;
  count: number;
  pages: number;
  next: string;
  prev: string;
};
