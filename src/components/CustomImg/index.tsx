import React from 'react'

export default function CustomImg (props : any) {
  console.log(props, 8)

  const formaattedSrc = props.src && props.src.replace('{{ site.baseurl }}', '')
  return (
    <img src={formaattedSrc} style={props.style} srcSet={props.srcSet} className={props.className} />
  )
}