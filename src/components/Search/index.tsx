import React from 'react'
import './types'
import './style.scss'
import formatPaths from '@utils/formatPaths'

export default function Search() {
  return (
    <div className="search-bar-container">
      <input placeholder='Search...' />
      <img className='search-bar-icon' src={formatPaths("search.png")} />
    </div>
  )
}
