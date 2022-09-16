import React, { Component } from 'react'
import Hit from './Hit'
import { getLunr, Metadata } from './utils'

interface StateTypes {
  query: string
  results: { ref: string; metadata: Metadata }[]
}

class Search extends Component {
  state: StateTypes = {
    query: '',
    results: []
  }

  render() {
    const { results } = this.state
    console.log(results)
    return (
      <div className="search-wrapper">
        <div className="search-bar-container">
          <input type="search" placeholder="Search here…" className="ais-SearchBox-input" onChange={this.search} />
        </div>
        <div className="hit-container">
          {results.map((result) => {
            console.log({ result })
            return <Hit key={result.ref} lunrRef={result.ref} metadata={result.metadata} />
          })}
        </div>
      </div>
    )
  }

  getSearchResults(query: string): StateTypes['results'] {
    if (!query || !getLunr()) return []
    const lunr = getLunr()
    const results = lunr.index.search(`${query}`)
    // TODO: query right now works only for one word.
    // We have to split the string into ' ', and add a +
    // i.e SDK Components => +sdk +components.
    // And also fix the metadata Types
    // results.metadata = { sdk : { title: [10, 1 ] }, components: { slug: [15, 5 ] } }
    return results.slice(0, 2).map(({ ref, matchData }) => ({
      ref,
      metadata: matchData.metadata[query.toLocaleLowerCase().trim()]
    }))
  }

  search = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    const results = this.getSearchResults(query)
    console.log({ query, results })
    this.setState({ results, query })
  }
}

export default Search
