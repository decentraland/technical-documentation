import React from 'react'
import { graphql, StaticQuery, useStaticQuery } from 'gatsby'
import RootDir from '../RootDir'
import './style.css'

import menu from '../../mocks/menu.json'
import { CommentContent } from 'decentraland-ui'

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

function generateMenu(data) {
  data.map(item => {
    console.log(item)
  })
}

generateMenu(data.allFile.edges)

  return (
    <aside className="sidebar-container">
      <span>This is a sidebar</span>
      

      {menu.data &&
        menu.data.map((item: any, key: number) => {
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
