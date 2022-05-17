import React from 'react'
import './types'
import './style.scss'
import { Link } from 'gatsby'
import { SectionCardProps } from './types'
import formatPaths from 'utils/formatPaths'

export default function SectionCard({
  img,
  title,
  url,
  bgColor,
  description
}: SectionCardProps) {
  return (
    <div className="section-card" style={{ background: bgColor }}>
      <Link to={url}>
        <img src={formatPaths(img)} />
        <div className="section-card-info">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  )
}
