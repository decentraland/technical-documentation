import * as React from 'react'
import { Snippet } from 'react-instantsearch-dom'
import { Link } from 'gatsby'
import "./style.scss"
import formatPaths from '../../utils/formatPaths'

export default function Hit({ hit }) {
    const imgIndex = hit.frontmatter.slug.split('/')
    const img = imgIndex[0] === '/' ? imgIndex[2] : imgIndex[1]
    return (
      <div className="hit-result">
        <div className='hit-result-icon'>
          <img src={formatPaths(`${img}.svg`)} />
        </div>
        <Link to={hit.frontmatter.slug} >
          <h4 className='hit-result-title'>{hit.frontmatter.title}</h4>
          <Snippet attribute="html" hit={hit} />
        </Link>
      </div>
    )}