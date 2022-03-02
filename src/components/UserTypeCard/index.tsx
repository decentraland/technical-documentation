import React from 'react'
import './types'
import './style.scss'
import { Link } from 'gatsby'
import { SectionCardProps } from './types'
import { StaticImage } from 'gatsby-plugin-image'
import { GatsbyImage } from 'gatsby-plugin-image'

export default function UserTypeCard({
  img,
  title,
  url,
  bgColor,
  description
}: SectionCardProps) {
  return (
    <div className="section-card" style={{ background: bgColor }}>
      <Link to={url}>
        <div className="card-img">
          <img src={img} />
          <GatsbyImage src={img} alt={title} />
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
