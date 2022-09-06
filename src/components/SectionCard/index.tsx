import React from 'react'
import './types'
import './style.scss'
import { Link } from 'gatsby'
import { SectionCardProps } from './types'
import formatPaths from 'utils/formatPaths'

export default function SectionCard({ img, title, url, bgColor, description }: SectionCardProps) {

  const background = `linear-gradient(212.97deg,${bgColor} 0%, #d453df 100%)`

  return (
    <div className="section-card" style={{ background: background }}>
      <Link to={url}>
        <img className="section-card-img" src={formatPaths(img)} />
        <div className="section-card-info">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  )
}
