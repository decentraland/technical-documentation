import React, { useEffect } from 'react'
import './style.scss'

async function getAgencies(url) {
  const agencyData = await fetch(url)
  console.log(agencyData)
}

export default function Agencies(props: any) {
  useEffect(() => {
    getAgencies('https://github.com/decentraland/technical-documentation/blob/main/docs/agencies.yml')
  })

  return <div>agencies</div>
}
