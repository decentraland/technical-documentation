import { Link } from 'gatsby'
import { useEffect, useContext } from 'react'
import React from 'react'
import { useState } from 'react'
import formatPaths from '../../utils/formatPaths'
import './style.scss'
import SidebarContext from '../../contexts/Sidebar'

type Props = {
  name: string
  offset: number
  path?: string
  slug?: string
  children?: JSX.Element[]
  isOpen?: boolean
  openParent?: () => void
  isActive?: boolean
  getName?: (name: string) => void
  color?: string
}

export default function RootDir(props: Props) {
  const sidebarContext = useContext(SidebarContext)
  const { name, children, offset, slug, openParent, color } = props
  const [open, setOpen] = useState<boolean>(false)
  const [active, setActive] = useState<boolean>(false)
  const match = /[0-9]{4}-[0-9]{2}-[0-9]{2}-/i

  console.log(color, 'lala')

  useEffect(() => {
    if (location.pathname.includes(slug)) {
      openParent()
      setOpen(true)
      setActive(true)

      sidebarContext.updateValue(name)
    }
  }, [])

  function handleOpen() {
    setOpen(true)

    openParent && openParent()
  }

  return (
    <>
      <div className="root-container">
        <div
          className={children && 'root-title'}
          onClick={() => setOpen((prevState) => !prevState)}
          style={{ paddingLeft: `${10 * offset}px` }}
        >
          {children ? (
            offset === 0 ? (
              <span className="sidebar-category">{name}</span>
            ) : (
              <span className="sidebar-dir">
                <img src={formatPaths('drop-down.png')} />
                {name}
              </span>
            )
          ) : (
            slug && (
              <Link className={active ? 'sidebar-open' : 'sidebar-item'} to={slug} style={open ? { color: color } : {}}>
                {name}
              </Link>
            )
          )}
        </div>
        <div
          className={open && children ? 'child-container' : 'child-container-collapsed'}
          style={{ paddingLeft: `${20 * offset}px` }}
        >
          {children &&
            children.map((item: any, key: number) => {
              return (
                <RootDir
                  name={item.name}
                  children={item.children}
                  offset={1}
                  slug={item.slug?.toLowerCase().replace(match, '')}
                  key={key}
                  isOpen={open}
                  openParent={handleOpen}
                  color={color}
                />
              )
            })}
        </div>
      </div>
    </>
  )
}
