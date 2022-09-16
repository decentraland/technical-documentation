import React from 'react'
import { graphql } from 'gatsby'
import SidebarLayout from './../components/SidebarLayout'
import './style.scss'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'
import CodeBlock from '../components/CodeBlock'
import CustomImg from '../components/CustomImg'
import CustomLink from '../components/CustomLink'

function retrieveText(item) {
  const text = typeof item === 'string' ? item : item[0]
  return { text, id: text.toLowerCase().replace(' ', '-') }
}

export default function Template(props) {
  const { location, data } = props

  const components = {
    code: CodeBlock,
    img: CustomImg,
    figure: CustomImg,
    a: (props) => <CustomLink {...props} location={location} />,
    h1: ({ children }) => {
      let render = null
      if (typeof children === 'object') {
        render = children
      } else {
        const { text, id } = retrieveText(children)
        render = (
          <h1>
            <a id={id}>{text}</a>
          </h1>
        )
      }
      return render
    },
    h2: ({ children }) => {
      let render = null
      if (typeof children === 'object') {
        render = children
      } else {
        const { text, id } = retrieveText(children)
        render = (
          <h2>
            <a id={id}>{text}</a>
          </h2>
        )
      }
      return render
    },
    h3: ({ children }) => {
      let render = null
      if (typeof children === 'object') {
        render = children
      } else {
        const { text, id } = retrieveText(children)
        render = (
          <h3>
            <a id={id}>{text}</a>
          </h3>
        )
      }
      return render
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
