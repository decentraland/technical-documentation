import React from 'react'
import { graphql, StaticQuery, useStaticQuery } from 'gatsby'
import RootDir from '../RootDir'
import './style.css'

import menu from '../../mocks/generated-menu.json'

console.log(menu)
export default function Sidebar() {

  const data = useStaticQuery(graphql`
  {
    allFile(filter: {sourceInstanceName: {eq: "pages"}}) {
      edges {
        node {
          relativePath
          name
          relativeDirectory
          root
          extension
        }
      }
    }
  }

`)

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
              key={key}
            />
          )
        })}
    </aside>
  )
}
