import React from 'react'
import './types'
import './style.scss'
import { Link } from 'gatsby'
import { SectionCardProps } from './types'
import { StaticImage } from 'gatsby-plugin-image'
import formatPaths from '@utils/formatPaths'

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
          <img src={formatPaths("caret.png")} alt="caret" />
        </div>
      </Link>
    </div>
  )
}
