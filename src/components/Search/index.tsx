import React from 'react'
import './types'
import './style.scss'
import formatPaths from '@utils/formatPaths'
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits, connectStateResults, Snippet } from 'react-instantsearch-dom';

const searchClient = algoliasearch('ZBR370BA1A', '90d39c58d1ec20ab5f315750f7894b8b');

const Hit = ({ hit }) => {
  console.log(hit, 123)
  return (
    <div className="hit-result-container">
      <h3>The title</h3>
      <Snippet hit={hit} attribute="html" />
    </div>
  )}

const Results = connectStateResults(({ searchState }) => {
  return searchState && searchState.query ? <Hits hitComponent={Hit} /> : null 
})

// // 1. Create a render function
// const renderSearchBox = ({currentRefinement, refine}) => {
//   return (
//     <>
//       <input placeholder='Search here...'/>
// {currentRefinement, refine}//     </>
//   )
// };

// // 2. Create the custom widget
// const CustomSearchBox = connectSearchBox(
//   renderSearchBox
// );

const glass = <img className='search-bar-icon' src={formatPaths("search.png")} />

export default function Search() {
  return (
      <InstantSearch searchClient={searchClient} indexName="DCL_DOCS">
        <div className="search-bar-container">
          <SearchBox submit={glass}/>
        </div>
        <Results />
        {/* <Hits hitComponent={Hit} /> */}
      </InstantSearch>
  )}