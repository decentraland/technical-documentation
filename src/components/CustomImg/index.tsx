import React from 'react'

export default function CustomImg (props : any) {
  
  const formaattedSrc = props.src && props.src.replace('{{ site.baseurl }}', '')
  return (
    <img src={formaattedSrc} style={props.style} srcSet={props.srcSet} className={props.className} />
  )
}