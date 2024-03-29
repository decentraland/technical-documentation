import * as React from 'react'
import './style.scss'
import Hit from '../Hit'
import { connectHits } from 'react-instantsearch-dom'

export default function ConnectedResultHits() {
  const ResultHits = ({ hits }) => {
    return (
      <div className="result-page-hits-wrapper">
        {hits.map((hit, i) => {
          return <Hit hit={hit} key={i} />
        })}
      </div>
    )
  }

  const CustomHits = connectHits(ResultHits)

  return <CustomHits />
}
