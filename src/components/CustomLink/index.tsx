import React from 'react'
import './style.scss'

export default function CustomLink(props: any) {
  const { href, children, id } = props
  return (
    <a className="blog-link" href={href} id={id && id}>
      {children}
    </a>
  )
}
