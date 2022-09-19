export type SearchResponse = {
  ref: string
  score: number
  matchData: { metadata: { [query: string]: Metadata } }
}

export interface LunrStore {
  slug: string
  title: string
  content: string
}

export type LunrIndex = {
  search(query: string): SearchResponse[]
}

declare const window: {
  __LUNR__: {
    en: { index: LunrIndex; store: { [query: string]: LunrStore } }
  }
}

export type Metadata = {
  [key in keyof LunrStore]?: { position: [number, number][] }
}

export function getLunr() {
  return window.__LUNR__ && window.__LUNR__.en
}
