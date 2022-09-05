import React, { useState } from 'react'
import './types'
import './style.scss'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, Hits, connectStateResults, Snippet } from 'react-instantsearch-dom'
import { Link } from 'gatsby'
import CustomSearchBox from '../CustomSearchBox'
import { ResultsProps, SearchProps } from './types'

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

const WrappedResults = connectStateResults(({ searchState, searchResults, ...props }) => {
  const { category } = props
  return searchState && searchState.query ? (
    searchResults.nbHits ? (
      <Results category={category} query={searchState.query} />
    ) : (
      <>
        <div className="no-hits">The searched text can’t be found in any section of the Decentraland documentation</div>
        <div className="hit-results-grayarea" />
      </>
    )
  ) : null
})

function Results({ category, query }: ResultsProps) {
  return (
    <div className="hit-container">
      <Hits hitComponent={Hit} />
      <div className="search-bar-more">
        <Link to={category ? `/${category}/results?search=${query}` : `/results?search=${query}`}>
          See more results
        </Link>
      </div>
    </div>
  )
}

export default function Search({ category }: SearchProps) {
  const [query, setQuery] = useState()

  return (
    <div className="search-wrapper">
      <InstantSearch searchClient={searchClient} indexName="DCL_DOCS">
        <CustomSearchBox getQuery={setQuery} />
        {query && (
          <>
            <WrappedResults category={category} />
            <div className="hit-results-grayarea" onClick={(e) => setQuery(undefined)} />
          </>
        )}
      </InstantSearch>
    </div>
  )
}
