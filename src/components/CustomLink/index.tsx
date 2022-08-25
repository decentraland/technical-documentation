import React from 'react'
import './style.scss'
import { useStaticQuery, graphql } from 'gatsby'

export default function CustomLink(props: any) {
  const { href, children, id } = props

  const { site } = useStaticQuery(graphql`
    {
      site {
        assetPrefix
      }
    }
  `)

  let newHref = href
  const assetPrefix = site.assetPrefix.replace('https://', 'https:/')
  if (href.startsWith(assetPrefix)) {
    newHref = href.slice(assetPrefix.length)
  }

  return (
    <a className="blog-link" href={newHref} id={id && id}>
      {children}
    </a>
  )
}
