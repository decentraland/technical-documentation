import React from 'react'
import './style.scss'
import { useStaticQuery, graphql } from 'gatsby'

function removeAppend(url) {
  let newHref = url

  const assetPrefix = process.env.GATSBY_ASSET_PREFIX
  if (url.startsWith(assetPrefix)) {
    newHref = url.slice(assetPrefix.length)
  }

  return newHref
}

export default function CustomLink(props: any) {
  const { href, children, id } = props

  // this is a temporal workaround, see https://github.com/gatsbyjs/gatsby/issues/21462

  console.log(removeAppend(href))

  return (
    <a className="blog-link" href={href && removeAppend(href)} id={id && id}>
      {children}
    </a>
  )
}
