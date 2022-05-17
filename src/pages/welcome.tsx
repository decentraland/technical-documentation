import * as React from 'react'
import 'decentraland-ui/dist/themes/base-theme.css'
import 'decentraland-ui/dist/themes/alternative/light-theme.css'
import { Navbar } from 'decentraland-ui/dist/components/Navbar/Navbar'
import { Footer } from 'decentraland-ui/dist/components/Footer/Footer'
import { Page } from 'decentraland-ui/dist/components/Page/Page'

export default function WelcomePage() {
  return (
    <>
      <Navbar isFullWidth activePage="docs" />
      <Page>otra page</Page>
      <Footer isFullWidth />
    </>
  )
}
