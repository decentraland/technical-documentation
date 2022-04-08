import React, { useEffect, useState } from 'react'
import RootDir from '../RootDir'
import './style.scss'
import formatPaths from '../../utils/formatPaths'

// TODO - right now this data is hardcoded for all sidebars but it should
// probably be a prop since we want different versions per section
import menu from '../../repos/menu.json'
import categories from  "../../mocks/categories.json"

export default function Sidebar() {

  const [category, setCategory] = useState<string>("")
  const [properties, setProperties] = useState<any>()

  useEffect(() => {
    setCategory(location.pathname.split("/")[1])
    const properties = categories.data.find(item => {
      return item.title.toLowerCase() == category 
    })

    setProperties(properties)

  })

  return (
    <aside className="sidebar-container">
      {category && properties && 
        <>
          <div className="sidebar-header" style={{background: properties.bgColor}}>
                <img src={formatPaths(`banner-${category}.png`)} />
                <h2 className="sidebar-title">{category} Documentation</h2>
              </div>
          <div className='sidebar-items'>
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
            </div>
          </>
        }
    </aside>
  )
}
