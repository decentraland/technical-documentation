import React from 'react'

export default function CustomLink (props : any) {
  const { href, children } = props
  return (
    <a href={href}>{children}</a>
  )
}