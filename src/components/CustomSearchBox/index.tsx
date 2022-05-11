import React from 'react'
import formatPaths from '@utils/formatPaths'
import { SearchBox } from 'react-instantsearch-dom'

import './style.scss'

type CustomSearchBoxProps = {
  getQuery: any
}

export default function CustomSearchBox({ getQuery }: CustomSearchBoxProps) {
  const glass = (
    <img className="search-bar-icon" src={formatPaths('search.png')} />
  )

  function handleQuery(query: any) {
    return getQuery(query)
  }

  return (
    <div className="search-bar-container">
      <SearchBox submit={glass} onChange={(e) => handleQuery(e.target.value)} />
    </div>
  )
}
