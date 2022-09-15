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
                <div className="search-wrapper">
                  {/* <Search /> */}
                </div>
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
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.55662 14C8.13481 14 7.90253 14.4901 8.16962 14.8166L11.615 19.028C11.8151 19.2725 12.189 19.2725 12.389 19.028L15.8345 14.8166C16.1015 14.4901 15.8693 14 15.4475 14H8.55662Z"
                      fill={bgColor}
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.55662 9.99992C8.13481 9.99992 7.90253 9.50978 8.16962 9.18331L11.615 4.97196C11.8151 4.72744 12.189 4.72744 12.389 4.97196L15.8345 9.18331C16.1015 9.50978 15.8693 9.99992 15.4475 9.99992H8.55662Z"
                      fill={bgColor}
                    />
                  </svg>
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
                      isFirst
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
