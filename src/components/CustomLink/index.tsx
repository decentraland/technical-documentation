import React from 'react'
import './style.scss'

export default function CustomLink(props: any) {
  const { href, children, id } = props

  function appendDomain(url) {
    if (url.includes(process.env.GATSBY_PUBLIC_PATH)) {
      return url.replace(process.env.GATSBY_PUBLIC_PATH, '')
    } else {
      return url
    }
  }

  console.log(props, 'curtom link props', process.env)
  
  return (
    <a className="blog-link" href={href && appendDomain(href)} id={id && id}>
      {children}
    </a>
  )
}
