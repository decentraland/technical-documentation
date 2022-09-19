import React, { useEffect, useState } from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'
import formatPaths from 'utils/formatPaths'
import debounce from 'utils/debounce'

const SearchBox = ({ refine, handleQuery }) => {
  const [value, setValue] = useState('')

  useEffect(
    debounce(() => {
      if (value.length > 3) {
        performSearch(value)
        handleQuery(value)
      }
    }, 100),
    [value]
  )

  function performSearch(search) {
    refine(search)
  }

  return (
    <div className="custom-search-input-wrapper">
      <input
        type="search"
        value={value}
        onChange={(e) => setValue(e.target.value as string)}
        className="custom-search-input"
      />
      <img className="search-bar-icon" onClick={() => performSearch(value)} src={formatPaths('search.svg')} />
      {value && <img className="search-bar-cancel" onClick={() => setValue('')} src={formatPaths('erase.svg')} />}
    </div>
  )
}
const SearchBoxBasic = connectSearchBox(SearchBox)

export default SearchBoxBasic
