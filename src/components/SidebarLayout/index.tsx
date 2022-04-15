import * as React from 'react'
import 'decentraland-ui/dist/themes/alternative/light-theme.css'
import { Footer } from 'decentraland-ui/dist/components/Footer/Footer'
import { Page } from 'decentraland-ui/dist/components/Page/Page'
import { Section } from 'decentraland-ui/dist/components/Section/Section'
import { Navbar } from 'decentraland-ui/dist/components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar'
import './style.scss'
import Search from '../Search'

export type Props = {
  children?: JSX.Element[] | JSX.Element // verify type
}

export default function SidebarLayout({ children }: Props) {
  return (
    <>
      <Navbar isFullWidth activePage="docs" onSignIn={() => console.log('Clicked on sign in')} />
        <Page isFullscreen className='container-full-height'>
          <Section className="flex section-no-margin container-full-height">
            <Sidebar />
            {children}
          </Section>
        </Page>
        <Footer isFullscreen isFullWidth />
      </>
  )
}
