import React, {useState} from 'react'
import './types'
import './style.scss'
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Hits, connectStateResults, Snippet } from 'react-instantsearch-dom';
import { Link } from 'gatsby';
import CustomSearchBox from '../CustomSearchBox';

const searchClient = algoliasearch('ZBR370BA1A', '90d39c58d1ec20ab5f315750f7894b8b');

const Hit = ({ hit }) => {
  return (
    <div className="hit-result-container">
      <Link to={hit.frontmatter.slug}>
        <h4>{hit.frontmatter.title}</h4>
        <Snippet attribute="html" hit={hit} />
      </Link>
    </div>
  )}

const Results = connectStateResults(({ searchState }) => {
  return searchState && searchState.query ? 
    <>
      <Hits hitComponent={Hit} />
      <div className='search-bar-more'><Link to={`/results?search=${searchState.query}`}>See more results</Link></div>
      <div className="hit-results-grayarea" />
    </> 
      : null 
})

export default function Search() {

  const [query, setQuery] = useState()

  return (
      <InstantSearch searchClient={searchClient} indexName="DCL_DOCS">
        <CustomSearchBox getQuery={setQuery} />
        <Results />
      </InstantSearch>
  )}