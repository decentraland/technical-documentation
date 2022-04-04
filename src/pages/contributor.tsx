import * as React from 'react'
import 'decentraland-ui/dist/themes/base-theme.css'
import 'decentraland-ui/dist/themes/alternative/light-theme.css'
import Welcome from '../components/Welcome'
import SidebarLayout from '../components/SidebarLayout'
import { graphql } from 'gatsby'

export default function IndexPage({data} : any) {
  console.log(data, 12)
  return (
    <SidebarLayout name="contributor">
      <Welcome />
    </SidebarLayout>
  )
}

export const query = graphql`
query {
allMarkdownRemark(filter: { frontmatter: { slug: { ne: null } } }) {
  edges {
    node {
      fields {
        slug
      }
      frontmatter {
        slug
      }
    }
  }
}
}
`