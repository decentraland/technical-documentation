import React from 'react'
import { getLunr, Metadata } from './utils'

export interface PropTypes {
  lunrRef: string
  metadata: Metadata
}

function getData(ref: string) {
  return getLunr().store[ref]
}

export function Hit({ lunrRef, metadata }: PropTypes) {
  const { slug, title, content } = getData(lunrRef)
  const contentMetadata = metadata?.content?.position[0]

  // TODO: we only use the first hit.
  // Maybe we should iterate each hit and show only a part of that hit.
  // We could reuse this getContent fn to do this for each hit and reduce the amountOfLetters.
  function getContent() {
    // How many letters from the highlighted word we are going to show before and after
    const amountOfLetters = 100
    if (!contentMetadata) return <span>{content.slice(0, amountOfLetters * 2)}</span>
    const [start, length] = contentMetadata
    // If the highlight word is less than the amount of letters, it means its one of the initial words of the content.
    const startContent = content.slice(Math.max(0, start - amountOfLetters), start)
    // Add the amountOfLetters to the end, plus the extra that the startContent may not use.
    const extraEndContent = start > amountOfLetters ? amountOfLetters : amountOfLetters - start + amountOfLetters
    const endContent = content.slice(start + length, start + length + extraEndContent)
    return (
      <span>
        <span>{startContent}</span>
        <strong>{content.slice(start, start + length)}</strong>
        <span>{endContent}</span>
      </span>
    )
  }

  return (
    <li className="ui-hits-item">
      <div className="hit-result-container">
        <a href={slug}>
          <h4>{title}</h4>
          <span className="snippet">
            <span className="non-highlighted">{getContent()}</span>
            {/* <em className="highlighted">TODO</em> */}
          </span>
        </a>
      </div>
    </li>
  )
}

export default Hit
