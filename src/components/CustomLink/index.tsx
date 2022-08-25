import React from 'react'
import './style.scss'

export default function CustomLink(props: any) {
  const { href, children, id } = props

  function appendDomain(url) {
    if (url[0] === '/') {
      return process.env.GATSBY_PUBLIC_URL + url
    } else {
      return url
    }
  }

  console.log(props, 'curtom link props')
  return (
    <a className="blog-link" href={appendDomain(href)} id={id && id}>
      {children}
    </a>
  )
}
