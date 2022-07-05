import React, { useState } from 'react'
import RootDir from '../RootDir'
import './style.scss'
import menu from '../../repos/menu.json'
import Search from '../Search'
import formatPaths from 'utils/formatPaths'

export default function ResponsiveSidebar({ category, properties }: any) {
  const [open, setOpen] = useState<boolean>(false)
  const match = /[0-9]{4}-[0-9]{2}-[0-9]{2}-/i

  console.log(open)

  return (
    <div className={'responsive-sidebar-container'} style={{ borderBottom: `3px solid ${properties.bgColor}` }}>
      {category && properties && (
        <>
          <div className="responsive-sidebar-header" onClick={() => setOpen((prevState) => !prevState)}>
            {/* <Search /> */}
            <h2 className="responsive-sidebar-title">
              {category} Documentation{' '}
              <img src={formatPaths('caret-black.png')} style={open ? { transform: 'rotate(90deg)' } : {}} />
            </h2>
          </div>
          <div className={open ? `responsive-sidebar-items` : `responsive-sidebar-items-closed`}>
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
    </div>
  )
}
