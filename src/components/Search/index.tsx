import React from 'react'
import './types'
import './style.scss'
import formatPaths from '@utils/formatPaths'
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, connectStateResults, Snippet } from 'react-instantsearch-dom';
import { Link } from 'gatsby';

const searchClient = algoliasearch('ZBR370BA1A', '90d39c58d1ec20ab5f315750f7894b8b');

const Hit = ({ hit }) => {
  console.log(hit, 123)
  return (
    <div className="hit-result-container">
      <Link to={hit.frontmatter.slug}>
        <h4>The title</h4>
        <Snippet attribute="html" hit={hit} />
      </Link>
    </div>
  )}

const Results = connectStateResults(({ searchState }) => {
  return searchState && searchState.query ? <><Hits hitComponent={Hit} /><div className='search-bar-more'>See more results</div></> : null 
})

const glass = <img className='search-bar-icon' src={formatPaths("search.png")} />

export default function Search() {
  return (
      <InstantSearch searchClient={searchClient} indexName="DCL_DOCS">
        <div className="search-bar-container">
          <SearchBox submit={glass}/>
        </div>
        <Results />
      </InstantSearch>
  )}