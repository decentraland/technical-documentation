import * as React from 'react'
import 'decentraland-ui/dist/themes/base-theme.css'
import 'decentraland-ui/dist/themes/alternative/light-theme.css'
import { Footer } from 'decentraland-ui/dist/components/Footer/Footer'
import { Page } from 'decentraland-ui/dist/components/Page/Page'
import { Section } from 'decentraland-ui/dist/components/Section/Section'
import { Navbar } from 'decentraland-ui/dist/components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar'
import './style.scss'

export type Props = {
  children?: JSX.Element[] | JSX.Element // verify type
  name: string
}

// TODO move to utils
function formatPaths(url: string) {
  const normalizedUrl = url.toLowerCase()
  const finalPath =
    process.env.GATSBY_ENV === 'prod'
      ? `https://cdn.decentraland.org/@dcl/docs-site/${process.env.GATSBY_VERSION}/${normalizedUrl}`
      : `/${normalizedUrl}`
  return finalPath
}

export default function SidebarLayout({ name, children }: Props) {
  return (
    <>
      <>
        <Navbar onSignIn={() => console.log('Clicked on sign in')} />
        <Page>
          <div className="docs-header">
            <img src={formatPaths(name + '.png')} />
            <h2 className="docs-title">{name} Documentation</h2>
          </div>
          <Section className="flex">
            <Sidebar />
            {children}
          </Section>
        </Page>
        <Footer />
      </>
    </>
  )
}
