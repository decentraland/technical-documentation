import React, { useEffect, useState } from 'react'
import RootDir from '../RootDir'
import './style.scss'
import formatPaths from '../../utils/formatPaths'
import { Link } from 'gatsby'

// TODO: - right now this data is hardcoded for all sidebars but it should
// probably be a prop since we want different versions per section
import menu from '../../repos/menu.json'
import categories from '../../mocks/categories.json'
import Search from '../Search'

export default function Sidebar() {
  const [category, setCategory] = useState<string>('')
  const [properties, setProperties] = useState<any>()

  useEffect(() => {
    const originUrl = new URL(process.env.GATSBY_PUBLIC_URL)
    const path = location.pathname.replace(originUrl.pathname, '')
    const value = path.split('/')[0]
    const properties = categories.data.find(
      (item) => item.title.toLowerCase() === value
    )
    setCategory(value)
    setProperties(properties)
  })

  return (
    <aside className="sidebar-container">
      {category && properties && (
        <>
          <div
            className="sidebar-header"
            style={{ background: properties.bgColor }}
          >
            <img
              className="sidebar-header-background"
              src={formatPaths(`banner-${category}.png`)}
            />
            <h2 className="sidebar-title">{category} Documentation</h2>
            <Search />
          </div>
          <div className="sidebar-items">
            <Link className="sidebar-home-link" to="/">
              HOME
            </Link>
            {menu &&
              menu[category].map((item: any, key: number) => {
                return (
                  <RootDir
                    name={item.name}
                    offset={0}
                    children={item.children}
                    slug={item.slug}
                    key={key}
                  />
                )
              })}
          </div>
        </>
      )}
    </aside>
  )
}
