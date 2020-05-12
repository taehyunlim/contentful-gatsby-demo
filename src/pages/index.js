import React from "react"
import { Link, graphql } from "gatsby"
import "./index.css"

import Layout from "../components/layout"

const BlogPost = ({ node }) => {
  return (
    <li>
      <Link to={node.slug}>
        {node.title}
        <div>
          <img src={node.heroImage.resize.src} />
        </div>
        <div>{node.body.childMarkdownRemark.excerpt}</div>
      </Link>
    </li>
  )
}

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Blog Post from Contentful</h1>
    <ul className="blog-post">
      {data.allContentfulBlog.edges.map(edge => (
        <BlogPost node={edge.node} />
      ))}
    </ul>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    allContentfulBlog(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          title
          slug
          body {
            childMarkdownRemark {
              excerpt(pruneLength: 100)
            }
          }
          heroImage {
            resize(width: 300, height: 300) {
              src
            }
          }
        }
      }
    }
  }
`
