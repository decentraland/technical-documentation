import React, { useState } from 'react'
import RootDir from '../RootDir'
import './style.scss'
import menu from '../../repos/menu.json'
import Search from '../Search'
import formatPaths from 'utils/formatPaths'
import { SidebarProvider } from '../../contexts/Sidebar'

export default function ResponsiveSidebar({ category, properties }: any) {
  const [open, setOpen] = useState<boolean>(false)
  const [activeValue, setActiveValue] = useState<string>('Menu')
  const match = /[0-9]{4}-[0-9]{2}-[0-9]{2}-/i
  const [showSearch, setShowSearch] = useState<boolean>(false)
  const { bgColor } = properties

  function updateValue(newValue: string) {
    setActiveValue(newValue)
  }

  return (
    <SidebarProvider value={{ activeMenu: 'Menu', updateValue }}>
      <div className={'responsive-sidebar-container'}>
        {category && properties && (
          <>
            {showSearch ? (
              <div className="responsive-sidebar-searchbox">
                <div className='search-wrapper'><Search /></div>
                <span onClick={() => setShowSearch((prevState) => !prevState)} style={{ color: bgColor }}>
                  cancel
                </span>
              </div>
            ) : (
              <div className="responsive-sidebar-header">
                <h2
                  className="responsive-sidebar-title"
                  onClick={() => setOpen((prevState) => !prevState)}
                  style={{ color: `${properties.bgColor}` }}
                >
                  {activeValue}
                  <img src={formatPaths('responsive-caret.png')} />
                </h2>
                <img
                  className="search-bar-icon"
                  src={formatPaths('search.svg')}
                  onClick={() => setShowSearch((prevState) => !prevState)}
                />
              </div>
            )}
            <div className={open ? `responsive-sidebar-items` : `responsive-sidebar-items-closed`}>
              <img className="icon-close" src={formatPaths('close.svg')} onClick={() => setOpen(false)} />
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
    </SidebarProvider>
  )
}
