export interface CharachterProps {
  id?: number,
  name?: string,
  image?: string,
  status?: 'Alive' | 'Dead' | 'unknown',
}

export type infoProps = {
  pageIndex?: number,
}

export type Info = {
  count?: number | null,
  next?: string | '',
  pages: number | 1,
  prev?: string | '',
}

