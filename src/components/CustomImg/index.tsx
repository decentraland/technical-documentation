import React from 'react'
import formatPaths from 'utils/formatPaths'

export default function CustomImg (props : any) {
  
  const formattedSrc = props.src && props.src.replace('{{ site.baseurl }}', '')
  return (
    <img src={formatPaths(formattedSrc)} style={props.style} srcSet={props.srcSet} className={props.className} />
  )
}