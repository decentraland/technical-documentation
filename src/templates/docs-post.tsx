import React from 'react'
import { graphql } from 'gatsby'
import SidebarLayout from './../components/SidebarLayout'
import './style.scss'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import CodeBlock from '../components/CodeBlock'
import CustomImg from '../components/CustomImg'
import CustomLink from '../components/CustomLink'

export default function Template(props) {
  const { location, data } = props

  console.log(data, 123)

  const components = {
    code: CodeBlock,
    img: CustomImg,
    figure: CustomImg,
    a: (props) => <CustomLink {...props} location={location} />,
    h1: ({ children }) => {
      const text = typeof children === 'string' ? children : children[0]
      return (
        <h1>
          <a id={`${text.toLowerCase().replace(' ', '-')}`}>{text}</a>
        </h1>
      )
    },
    h2: ({ children }) => {
      const text = typeof children === 'string' ? children : children[0]
      return (
        <h2>
          <a id={`${text.toLowerCase().replaceAll(' ', '-')}`}>{text}</a>
        </h2>
      )
    },
    h3: ({ children }) => {
      const text = typeof children === 'string' ? children : children[0]
      return (
        <h3>
          <a id={`${text?.toLowerCase().replace(' ', '-')}`}>{text}</a>
        </h3>
      )
    }
  }

  const { mdx } = data
  const { body, frontmatter } = mdx
  return (
    <>
      <SidebarLayout>
        <div className="blog-post-container">
          <div className="blog-post">
            <h1>{frontmatter.title}</h1>
            <MDXProvider components={components}>
              <MDXRenderer>{body}</MDXRenderer>
            </MDXProvider>
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
      fileAbsolutePath
      frontmatter {
        slug
        title
      }
    }
  }
`
