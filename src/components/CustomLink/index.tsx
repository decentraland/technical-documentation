import React from 'react'
import './style.scss'
import { useStaticQuery, graphql } from 'gatsby'

function appendDomain(url) {
  if (url.includes(process.env.GATSBY_PUBLIC_PATH)) {
    return url.replace(process.env.GATSBY_PUBLIC_PATH, '')
  } else {
    return url
  }
}

export default function CustomLink(props: any) {
  const { href, children, id } = props

  const { site } = useStaticQuery(graphql`
    {
      site {
        assetPrefix
      }
    }
  `)

  function appendDomain(url) {
    if (url.includes(site.assetPrefix)) {
      return url.replace(site.assetPrefix, '')
    } else {
      return url
    }
  }

  console.log(site)

  return (
    <a className="blog-link" href={href && appendDomain(href)} id={id && id}>
      {children}
    </a>
  )
}
