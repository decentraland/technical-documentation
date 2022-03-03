import React from 'react'
import './types'
import './style.scss'
import { Link } from 'gatsby'
import { SectionCardProps } from './types'
import { StaticImage } from 'gatsby-plugin-image'

// TODO move to utils
function formatPaths(url: string) {
  const finalPath =
    process.env.GATSBY_ENV === 'prod'
      ? `https://cdn.decentraland.org/@dcl/docs-site/${process.env.GATSBY_VERSION}/${url}`
      : url
  return finalPath
}

export default function UserTypeCard({
  title,
  img,
  url,
  bgColor,
  description
}: SectionCardProps) {
  return (
    <div className="section-card" style={{ background: bgColor }}>
      <Link to={url}>
        <div className="card-img">
          <img src={formatPaths(img)} alt={title} />
        </div>
        <div className="section-card-info">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="section-card-cta">
          <span>VIEW MORE</span>
          <StaticImage src="../../images/caret.png" alt="caret" />
        </div>
      </Link>
    </div>
  )
}
