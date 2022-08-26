import React from 'react'
import RootDir from '../RootDir'
import './style.scss'
import menu from '../../repos/menu.json'
import { Link } from 'gatsby'

export default function Sidebar({ category, properties }: any) {
  const match = /[0-9]{4}-[0-9]{2}-[0-9]{2}-/i

  return (
    <aside className="sidebar-container">
      {category && properties && (
        <>
          <div className="sidebar-items">
            <div className="sidebar-home-link">
              <Link to={`/${category}`}>{`${category} home`}</Link>
            </div>
            {menu &&
              menu[category].map((item: any, key: number) => {
                return (
                  <RootDir
                    name={item.name}
                    offset={0}
                    children={item.children}
                    slug={item.slug?.toLowerCase().replace(match, '')}
                    key={key}
                    color={properties.bgColor}
                    isFirst
                  />
                )
              })}
          </div>
        </>
      )}
    </aside>
  )
}
