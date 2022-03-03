import * as React from 'react'
import 'decentraland-ui/dist/themes/base-theme.css'
import 'decentraland-ui/dist/themes/alternative/light-theme.css'
import './../style.css'
import GeneralLayout from '../components/GeneralLayout'
import Welcome from '../components/Welcome'

export default function IndexPage() {
  return (
    <GeneralLayout>
      <Welcome />
    </GeneralLayout>
  )
}
