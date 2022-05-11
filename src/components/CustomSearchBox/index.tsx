import React, {useState} from 'react'
import './style.scss'
import formatPaths from '@utils/formatPaths'
import { SearchBox } from 'react-instantsearch-dom';

type CustomSearchBoxProps = {
  getQuery: any
}

export default function CustomSearchBox({getQuery} : CustomSearchBoxProps) {

  const glass = <img className='search-bar-icon' src="/search.png" />

  function handleQuery(query) {
    return getQuery(query)
  }

  return (
    <div className="search-bar-container">
      <SearchBox submit={glass} onChange={(e) => handleQuery(e.target.value)}/>
    </div>
  )}