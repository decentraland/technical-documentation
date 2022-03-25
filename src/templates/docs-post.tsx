import React from 'react'
import { graphql } from 'gatsby'
import SidebarLayout from './../components/SidebarLayout'

// TODO MOVE TO UTILS
function getLocation(slug: string) {
  const segment = slug.split('/')
  return segment[1]
}

export default function Template({ data }: any) {
  const { markdownRemark } = data
  const { html } = markdownRemark
  return (
    <>
      <SidebarLayout name="contributor">
        <div className="blog-post-container">
          <div className="blog-post">
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </div>
      </SidebarLayout>
    </>
  )
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      html
      tableOfContents
    }
  }
`