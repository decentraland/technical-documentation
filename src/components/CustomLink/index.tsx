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

  function removeAppend(url) {
    let newHref = url
    const assetPrefix = site.assetPrefix.replace('https://', 'https:/')
    if (href.startsWith(assetPrefix)) {
      newHref = href.slice(assetPrefix.length)
    }

    return newHref
  }

  return (
    <a className="blog-link" href={href && removeAppend(href)} id={id && id}>
      {children}
    </a>
  )
}
