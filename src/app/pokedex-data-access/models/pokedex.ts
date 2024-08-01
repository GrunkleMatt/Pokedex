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
