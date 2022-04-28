import React from 'react'
import { graphql } from 'gatsby'
import SidebarLayout from './../components/SidebarLayout'
import "./style.scss"
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import { MDXRenderer } from "gatsby-plugin-mdx"

deckDeckGoHighlightElement();

export default function Template({ data }: any) {
  const { mdx } = data
  const { body, frontmatter } = mdx
  return (
    <>
      <SidebarLayout>
        <div className="blog-post-container">
          <div className="blog-post">
            <h1>{frontmatter.title}</h1>
            +<MDXRenderer>{body}</MDXRenderer>
          </div>
        </div>
      </SidebarLayout>
    </>
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
      frontmatter {
        slug
        title
      }
    }
  }
`