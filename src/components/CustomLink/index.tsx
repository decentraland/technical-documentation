import React from 'react'
import './style.scss'

export default function CustomLink(props: any) {
  const { href, children, id } = props

  console.log(props, 123333
    )
  return (
    <a className="blog-link" href={href} id={id && id}>
      {children}
    </a>
  )
}
