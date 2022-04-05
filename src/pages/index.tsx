import * as React from 'react'
import 'decentraland-ui/dist/themes/base-theme.css'
import 'decentraland-ui/dist/themes/alternative/light-theme.css'
import GeneralLayout from '@components/GeneralLayout'
import WelcomeScreen from '@components/WelcomeScreen'

export default function IndexPage() {
  return (
    <GeneralLayout>
      <WelcomeScreen />
    </GeneralLayout>
  )
}
