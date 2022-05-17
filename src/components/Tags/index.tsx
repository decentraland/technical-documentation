import React from 'react'
import './types'
import './styles.scss'
import { Link } from 'gatsby'
import { TagProps } from './types'
import formatPaths from 'utils/formatPaths'

export default function Tags({ name, category, slug }: TagProps) {
  return (
    <Link to={slug} className="tag-container">
      <img src={formatPaths(`${category}-black.png`)} />
      <span>{name}</span>
    </Link>
  )
}
