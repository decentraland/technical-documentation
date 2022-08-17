import React, { useState } from 'react'
import './types'
import './style.scss'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, Hits, connectStateResults, Snippet } from 'react-instantsearch-dom'
import { Link } from 'gatsby'
import CustomSearchBox from '../CustomSearchBox'

const searchClient = algoliasearch('WEEDAO8F9V', '6638d12be8f2b2102e68bc9a87928807')

const Hit = ({ hit }) => {
  return (
    <div className="hit-result-container">
      <Link to={hit.frontmatter.slug}>
        <h4>{hit.frontmatter.title}</h4>
        <Snippet attribute="html" hit={hit} />
      </Link>
    </div>
  )
}

const Results = connectStateResults(({ searchState, searchResults }) => {
  console.log(searchResults, 123)
  return searchState && searchState.query ? (
    searchResults.nbHits ? (
      <>
        <Hits hitComponent={Hit} />
        <div className="search-bar-more">
          <Link to={`/results?search=${searchState.query}`}>See more results</Link>
        </div>
        <div className="hit-results-grayarea" />
      </>
    ) : (
      <>
        <div className="no-hits">there are no results for the desired query</div>
        <div className="hit-results-grayarea" />
      </>
    )
  ) : null
})

export default function Search() {
  const [query, setQuery] = useState()

  return (
    <InstantSearch searchClient={searchClient} indexName="DCL_DOCS">
      <CustomSearchBox getQuery={setQuery} />
      <Results />
    </InstantSearch>
  )
}
