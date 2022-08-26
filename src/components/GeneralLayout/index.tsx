import * as React from 'react'
import 'decentraland-ui/dist/themes/base-theme.css'
import 'decentraland-ui/dist/themes/alternative/light-theme.css'
import { Footer } from 'decentraland-ui/dist/components/Footer/Footer'
import { Page } from 'decentraland-ui/dist/components/Page/Page'
import { Navbar } from 'decentraland-ui/dist/components/Navbar/Navbar'
import './style.scss'

export type Props = {
  children?: JSX.Element[] | JSX.Element // verify type
}

export default function GeneralLayout({ children }: Props) {
  return (
    <>
      <>
        <Navbar isFullscreen activePage="docs" />
        <Page className="general-layout">
          <div>{children}</div>
        </Page>
        <Footer />
      </>
    </>
  )
}
