import React from 'react'
import formatPaths from 'utils/formatPaths'
import { SearchBox } from 'react-instantsearch-dom'

import './style.scss'

type CustomSearchBoxProps = {
  getQuery: any
}

export default function CustomSearchBox({ getQuery }: CustomSearchBoxProps) {
  const glass = <img className="search-bar-icon" src={formatPaths('search.svg')} />
  const reset = <img className="search-bar-cancel" src={formatPaths('erase.svg')} />

  function handleQuery(e: any) {
    const query = e.target.value
    return getQuery(query)
  }

  return (
    <div className="search-bar-container">
      <SearchBox submit={glass} reset={reset} onChange={handleQuery} />
    </div>
  )
}
