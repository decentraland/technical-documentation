import React from 'react'
import formatPaths from 'utils/formatPaths'

export default function CustomImg(props: any) {
  console.log(props.src, 1234)
  const formattedSrc = props.src && formatPaths(props.src.replace('{{ site.baseurl }}/', ''))
  return <img src={formattedSrc} style={props.style} srcSet={props.srcSet} className={props.className} />
}
