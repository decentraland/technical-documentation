import React, { Component } from 'react'
import { Link } from 'gatsby'

declare const window: {
  __LUNR__: {
    en: { index: any; store: any }
  }
}

function getLunr() {
  return window.__LUNR__ && window.__LUNR__.en
}

class Search extends Component {
  state = {
    query: '',
    results: []
  }

  render() {
    return (
      <div className="ui-search">
        <input
          className="search__input"
          type="text"
          value={this.state.query}
          onChange={this.search}
          placeholder={'Search'}
        />
        <ul className="search__list">
          {this.state.results.map((page) => (
            <li key={page.url}>
              <Link className="search__list_white search__list_non-decoration" to={page.url}>
                {JSON.stringify(page, null, 4)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  getSearchResults(query: any) {
    if (!query || !window.__LUNR__) return []
    const lunr = getLunr()
    const results = lunr.index.search(`${query}~1`)
    console.log(results[0])
    return results.map(({ ref }) => lunr.store[ref])
  }

  search = (event: any) => {
    const query = event.target.value
    const results = this.getSearchResults(query)
    this.setState({ results, query })
  }
}

export default Search
