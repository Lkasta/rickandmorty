export type CharactersResponseProps = {
  info: InfoProps;
  results: CharachterProps[];
};

export type CharacterStatusProps = "Alive" | "Dead" | "unknown";

export interface CharachterProps {
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
