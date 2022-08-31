import React from 'react'
import './style.scss'

function removeAppend(url) {
  let newHref = url

  const assetPrefix = process.env.GATSBY_ASSET_PREFIX
  if (url.startsWith(assetPrefix)) {
    newHref = url.slice(assetPrefix.length)
  }

  // sanitize url for anchors if someone enters an ending slash

  const { origin, pathname } = location
  if (url.startsWith('#')) {
    if (pathname.endsWith('/')) {
      newHref = `${origin}${pathname.slice(0, -1)}${url}`
    }
  }

  return newHref
}

export default function CustomLink(props: any) {
  const { href, children, id, location } = props

  console.log(location, 111)

  // this is a temporal workaround, see https://github.com/gatsbyjs/gatsby/issues/21462

  return (
    // Conditional rendering to account for anchors with no href
    <>
      {href ? (
        <a className="blog-link" href={removeAppend(href)} id={id && id}>
          {children}
        </a>
      ) : (
        id && (
          <a className="blog-link" id={id}>
            {children}
          </a>
        )
      )}
    </>
  )
}
