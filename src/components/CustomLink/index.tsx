import React from 'react'
import './style.scss'
import { useStaticQuery, graphql } from 'gatsby'

function removeAppend(url) {
  let newHref = url

  if (!process.env.GATSBY_PUBLIC_PATH) {
    const { site } = useStaticQuery(graphql`
      {
        site {
          assetPrefix
        }
      }
    `)

    const assetPrefix = site.assetPrefix.replace('https://', 'https:/')
    if (url.startsWith(assetPrefix)) {
      newHref = url.slice(assetPrefix.length)
    }
  }

  return newHref
}

export default function CustomLink(props: any) {
  const { href, children, id } = props

  // this is a temporal workaround, see https://github.com/gatsbyjs/gatsby/issues/21462

  return (
    <a className="blog-link" href={href && removeAppend(href)} id={id && id}>
      {children}
    </a>
  )
}
