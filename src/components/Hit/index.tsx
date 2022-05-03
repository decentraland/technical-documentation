import * as React from 'react'
import { Snippet } from 'react-instantsearch-dom'
import { Link } from 'gatsby'
import "./style.scss"


export default function Hit({ hit }) {
    console.log(hit)
    return (
      <div className="hit-result">
        <img />
        <Link to={hit.frontmatter.slug} >
          <h4>{hit.frontmatter.title}</h4>
          <Snippet attribute="html" hit={hit} />
        </Link>
      </div>
    )}