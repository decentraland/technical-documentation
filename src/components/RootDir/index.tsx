import { Link } from 'gatsby'
import { useEffect } from 'react'
import React from 'react'
import { useState } from 'react'
import formatPaths from '../../utils/formatPaths'
import './style.scss'

type Props = {
  name: string
  offset: number
  path?: string
  slug?: string
  children?: JSX.Element[] // TODO - verify type
  isOpen?: boolean
  openParent?: () => void
  isActive?: boolean
}

export default function RootDir(props: Props) {
  const { name, children, offset, slug, isOpen, openParent } = props
  const [open, setOpen] = useState<boolean>(false)
  const [active, setActive] = useState<boolean>(false)

  useEffect(() => {
    if (location.pathname.includes(slug)) {
      openParent()
      setOpen(true)
      setActive(true)
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
            <Link
              className={active ? 'sidebar-open' : 'sidebar-item'}
              to={slug}
            >
              {name}
            </Link>
          )}
        </div>
        <div
          className={
            open && children ? 'child-container' : 'child-container-collapsed'
          }
          style={{ paddingLeft: `${20 * offset}px` }}
        >
          {children &&
            // TO-DO: type the objects, need to define data structure first
            children.map((item: any, key: number) => {
              return (
                <RootDir
                  name={item.name}
                  children={item.children}
                  offset={1}
                  slug={item.slug}
                  key={key}
                  isOpen={open}
                  openParent={handleOpen}
                />
              )
            })}
        </div>
      </div>
    </>
  )
}
