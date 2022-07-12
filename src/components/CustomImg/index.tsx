import React from 'react'
import formatPaths from 'utils/formatPaths'
import './style.scss'

export default function CustomImg(props: any) {
  const formattedSrc = props.src && formatPaths(props.src.replace('{{ site.baseurl }}/', '').replace('/', ''))
  return <img src={formattedSrc} style={props.style} srcSet={props.srcSet} className={`${props.className} md-images`} />
}
