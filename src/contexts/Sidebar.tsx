import { createContext } from 'react'

type ContextValues = {
  activeMenu: string
  updateValue: (a: string) => void
}

const defaultValues: ContextValues = {
  activeMenu: 'Menu',
  updateValue: (a: string) => {}
}

const SidebarContext = createContext(defaultValues)

export const SidebarProvider = SidebarContext.Provider

export default SidebarContext
