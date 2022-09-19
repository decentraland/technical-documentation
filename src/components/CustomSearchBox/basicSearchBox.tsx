import React, { useEffect, useState } from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'
import formatPaths from 'utils/formatPaths'

/**
 * https://www.algolia.com/doc/api-reference/widgets/search-box/react/
 * https://dev.to/gabe_ragland/debouncing-with-react-hooks-jci
 */

const SearchBox = ({ currentRefinement, refine, handleQuery }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = setTimeout(() => {
    return searchTerm
  }, 200)

  useEffect(() => {
    if (debouncedSearchTerm) {
      performSearch(searchTerm)
      handleQuery(searchTerm)
    }
  }, [debouncedSearchTerm])

  function performSearch(search) {
    if (search.length > 3) {
      refine(search)
    }
  }

  return (
    <div className="custom-search-input-wrapper">
      <input
        type="search"
        onChange={(e) => e.target.value.length > 3 && setSearchTerm(e.target.value)}
        className="custom-search-input"
      />
      {searchTerm.length > 3 && (
        <img className="search-bar-icon" onClick={() => performSearch(searchTerm)} src={formatPaths('search.svg')} />
      )}
      {searchTerm && (
        <img className="search-bar-cancel" onClick={() => setSearchTerm('')} src={formatPaths('erase.svg')} />
      )}
    </div>
  )
}
const SearchBoxBasic = connectSearchBox(SearchBox)

export default SearchBoxBasic
