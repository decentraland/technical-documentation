import React from 'react'
import './types'
import './styles.scss'
import { Link } from 'gatsby'
import { TagProps } from './types'

export default function Tags({ name, category, slug }: TagProps) {
  return (
      <Link to={slug} className="tag-container">
        <img src={`${category}-black.png`}/>
        <span>{name}</span>
      </Link>
  )
}
