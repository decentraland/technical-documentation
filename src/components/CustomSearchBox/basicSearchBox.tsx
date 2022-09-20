import React, { useEffect, useState } from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'
import formatPaths from 'utils/formatPaths'
import { useDebounce } from './../../hooks/useDebounce'

const SearchBox = ({ refine, handleQuery }) => {
  const [value, setValue] = useState('')
  const debouncedSearch = useDebounce(value, 250)

  useEffect(() => {
    if (value.length > 2) {
      performSearch(debouncedSearch)
      handleQuery(debouncedSearch)
    }
  }, [debouncedSearch])

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
