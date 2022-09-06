import React, { useEffect, useState } from 'react'
import './types'
import './style.scss'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, Hits, connectStateResults, Snippet } from 'react-instantsearch-dom'
import { Link } from 'gatsby'
import CustomSearchBox from '../CustomSearchBox'
import { ResultsProps, SearchProps } from './types'

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
  const [searchClient, setSearchClient] = useState<any>()

  useEffect(() => {
    setSearchClient(algoliasearch(process.env.GATSBY_ALGOLIA_APPID, process.env.GATSBY_ALGOLIA_APIKEY))
  }, [])

  return (
    <div className="search-wrapper">
      {searchClient && (
        <InstantSearch searchClient={searchClient} indexName="DCL_DOCS">
          <CustomSearchBox getQuery={setQuery} />
          {query && (
            <>
              <WrappedResults category={category} />
              <div className="hit-results-grayarea" onClick={() => setQuery(undefined)} />
            </>
          )}
        </InstantSearch>
      )}
    </div>
  )
}
