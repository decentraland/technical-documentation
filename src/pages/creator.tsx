import * as React from 'react'
import 'decentraland-ui/dist/themes/base-theme.css'
import 'decentraland-ui/dist/themes/alternative/light-theme.css'
import Welcome from '../components/Welcome'
import SidebarLayout from '../components/SidebarLayout'

export default function IndexPage(props) {
  return (
    <SidebarLayout>
      <Welcome />
    </SidebarLayout>
  )
}
