import React from 'react'
import RootDir from '../RootDir'
import './style.scss'
import formatPaths from '../../utils/formatPaths'
import { Link } from 'gatsby'

// TODO: - right now this data is hardcoded for all sidebars but it should
// probably be a prop since we want different versions per section
import menu from '../../repos/menu.json'
import Search from '../Search'

export default function Sidebar({ category, properties }: any) {
  const match = /[0-9]{4}-[0-9]{2}-[0-9]{2}-/i

  return (
    <aside className="sidebar-container">
      {category && properties && (
        <>
          <div className="sidebar-header" style={{ background: properties.bgColor }}>
            <img className="sidebar-header-background" src={formatPaths(`banner-${category}.png`)} />
            <h2 className="sidebar-title">{category} Documentation</h2>
            <Search />
          </div>
          <div className="sidebar-items">
            <Link className="sidebar-home-link" to={`/${category}`}>
              HOME
            </Link>
            {menu &&
              menu[category].map((item: any, key: number) => {
                return (
                  <RootDir
                    name={item.name}
                    offset={0}
                    children={item.children}
                    slug={item.slug?.toLowerCase().replace(match, '')}
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
