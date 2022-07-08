import React from 'react'
import SidebarLayout from '../components/SidebarLayout'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

export default function CreatorPage({ data }: any) {
  const { mdx } = data
  const { body } = mdx

  return (
    <SidebarLayout>
      <MDXRenderer>{body}</MDXRenderer>
    </SidebarLayout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      body
      tableOfContents
      fileAbsolutePath
      frontmatter {
        slug
        title
      }
    }
  }
`
