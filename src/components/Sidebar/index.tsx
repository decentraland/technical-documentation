import React from 'react'
import RootDir from '../RootDir'
import './style.css'

import menu from '../../repos/menu.json'

export default function Sidebar() {
  return (
    <aside className="sidebar-container">
      <span>This is a sidebar</span>
      

      {menu &&
        menu.map((item: any, key: number) => {
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
    </aside>
  )
}
