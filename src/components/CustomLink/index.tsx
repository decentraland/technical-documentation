import React from 'react'

export default function CustomLink(props: any) {
  const { href, children, id } = props
  return (
    <a href={href} id={id && id}>
      {children}
    </a>
  )
}
