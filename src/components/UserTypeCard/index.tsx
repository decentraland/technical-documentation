import React from 'react'
import './types'
import './style.scss'
import { Link } from 'gatsby'
import { SectionCardProps } from './types'
import formatPaths from 'utils/formatPaths'

export default function UserTypeCard({ title, img, url, bgColor, description }: SectionCardProps) {
  return (
    <div className="user-card" style={{ background: bgColor }}>
      <Link to={url}>
        <div className="card-img">
          <img src={formatPaths(img)} alt={title} />
        </div>
        <div className="user-card-info">
          <h3>For {title}</h3>
          <p>{description}</p>
        </div>
        <div className="user-card-cta">
          <span>VIEW MORE</span>
          <img src={formatPaths('caret.png')} alt="caret" />
        </div>
      </Link>
    </div>
  )
}
