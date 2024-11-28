export interface CharachterProps {
  id?: number,
  name?: string,
  image?: string,
  status?: 'Alive' | 'Dead' | 'unknown',
  species?: string
  gender?: string
  origin?: {
    name?: string
  }
  location?: {
    name?: string
  }
}

export type Info = {
  pageIndex?: number,
  count?: number | null,
  next?: string | '',
  pages: number | 1,
  prev?: string | '',
}

