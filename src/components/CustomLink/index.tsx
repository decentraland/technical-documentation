import React, { useEffect, useState } from 'react'
import './style.scss'

export default function CustomLink(props: any) {
  const { href, children, id, location } = props

  const [sanitizedUrl, setSanitizedUrl] = useState<string>()
  const [isInternal, setIsInternal] = useState(false)

  function removeAppend(url, location) {
    let newHref = url

    // this is a temporal workaround, see https://github.com/gatsbyjs/gatsby/issues/21462
    const assetPrefix = process.env.GATSBY_ASSET_PREFIX?.replace('https://', 'https:/')

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

    setSanitizedUrl(newHref)
  }

  useEffect(() => {
    if (href) {
      removeAppend(href, location)
      if (sanitizedUrl) {
        if (sanitizedUrl.startsWith('/') || sanitizedUrl.startsWith('#')) {
          setIsInternal(true)
        }
      }
    }
  }, [sanitizedUrl])

  return (
    // Conditional rendering to account for anchors with no href
    <>
      {href ? (
        <a className="blog-link" href={sanitizedUrl} target={isInternal ? '_self' : '_blank'}>
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
