import * as React from 'react'
import { Snippet } from 'react-instantsearch-dom'
import { Link } from 'gatsby'
import './style.scss'
import formatPaths from '../../utils/formatPaths'
import categories from '../../mocks/categories.json'

export default function Hit({ hit }) {
  const splitSlug = hit.frontmatter.slug.split('/')
  const postCategory = categories.data.find((item) => item.url === '/' + splitSlug[1])
  const img = splitSlug[0] === '/' ? splitSlug[2] : splitSlug[1]

  return postCategory ? (
    <div className="hit-result">
      <div className="hit-result-icon" style={{ backgroundColor: postCategory && postCategory.bgColor }}>
        <img src={formatPaths(`${img}.svg`)} />
      </div>
      <Link to={hit.frontmatter.slug}>
        <h4 className="hit-result-title">{hit.frontmatter.title}</h4>
        <Snippet attribute="html" hit={hit} />
      </Link>
    </div>
  ) : null
}
