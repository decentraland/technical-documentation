import React from 'react'

export default function CustomLink (props : any) {
  console.log(props, 99)

  const { href, children } = props
  return (
    <a href={href}>{children}</a>
  )
}