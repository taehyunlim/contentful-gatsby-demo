import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

const BlogPost = ({ node }) => {
  return (
    <li>
      <Link to={node.slug}>{node.title}</Link>
    </li>
  )
}

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Blog Post from Contentful</h1>
    <ul>
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
        }
      }
    }
  }
`
