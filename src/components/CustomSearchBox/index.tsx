import React, { useEffect, useState } from 'react'
import formatPaths from 'utils/formatPaths'
import { SearchBox } from 'react-instantsearch-dom'
import SearchBoxBasic from './basicSearchBox'

import './style.scss'

type CustomSearchBoxProps = {
  getQuery: any
}

export default function CustomSearchBox({ getQuery }: CustomSearchBoxProps) {
  function handleQuery(query) {
    return getQuery(query)
  }

  return (
    <div className="search-bar-container">
      <SearchBoxBasic handleQuery={handleQuery} />
    </div>
  )
}
