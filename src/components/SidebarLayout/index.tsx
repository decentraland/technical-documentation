import * as React from 'react'
import { useState, useEffect } from 'react'
import 'decentraland-ui/dist/themes/alternative/light-theme.css'
import { Footer } from 'decentraland-ui/dist/components/Footer/Footer'
import { Page } from 'decentraland-ui/dist/components/Page/Page'
import { Section } from 'decentraland-ui/dist/components/Section/Section'
import { Navbar } from 'decentraland-ui/dist/components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar'
import ResponsiveSidebar from '../../components/ResponsiveSidebar'
import categories from '../../mocks/categories.json'
import './style.scss'
import { Tabs } from 'decentraland-ui/dist/components/Tabs/Tabs'
import { Link } from 'gatsby'
import Search from '../Search'

export type Props = {
  children?: JSX.Element[] | JSX.Element // verify type
  customSearch?: JSX.Element
}

export default function SidebarLayout({ children, customSearch }: Props) {
  const [sidebarCategory, setSidebarCategory] = useState<string>('')
  const [sidebarCategoryProps, setSidebarCategoryProps] = useState<any>(null)

  useEffect(() => {
    let path = location.pathname

    if (process.env.GATSBY_PUBLIC_URL !== '/') {
      const originUrl = new URL(process.env.GATSBY_PUBLIC_URL)
      path = path.replace(originUrl.pathname, '')
    }

    const value = path.split('/')[1]

    const categoryProps = categories.data.find((item) => {
      return item.url.toLowerCase() === '/' + value
    })

    const category = categoryProps ? value : 'player'

    setSidebarCategory(category)
    setSidebarCategoryProps(categoryProps)
  }, [sidebarCategory])

  return (
    <>
      <Navbar isFullscreen activePage="docs" />
      <Page className="container-full-height">
        <div className="tabs-header">
          <Tabs>
            {categories.data.map((item, key) => {
              return (
                <Tabs.Tab active={'/' + sidebarCategory === item.url} key={key}>
                  <Link className="tabs-navigation" to={item.url} style={{ borderColor: item.bgColor }}>
                    {item.title}
                  </Link>
                </Tabs.Tab>
              )
            })}
          </Tabs>
          <div className="sidebar-search">
            {customSearch ? (
              customSearch
            ) : (
              <Search category={sidebarCategory} color={sidebarCategoryProps && sidebarCategoryProps} />
            )}
          </div>
        </div>
        <Section className="flex section-no-margin container-full-height">
          <Sidebar category={sidebarCategory} properties={sidebarCategoryProps ?? categories.data[0]} />
          <ResponsiveSidebar category={sidebarCategory} properties={sidebarCategoryProps ?? categories.data[0]} />
          {children}
        </Section>
      </Page>
      <Footer />
    </>
  )
}
