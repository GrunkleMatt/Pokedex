export interface PokedexList {
  count: number
  next: string
  previous: string
  results: PokedexResult[]
}

export interface PokedexResult {
  name: string
  url: string
}

export interface PokedexCard extends PokedexResult {
  imgUrl?: string
  isHidden: boolean
}

export type PokedexRecord = Record<string, PokedexCard>
