import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/layout"

export class BlogPost extends Component {
  render() {
    const { title, body } = this.props.data.contentfulBlog
    return (
      <Layout>
        <div>
          <h1>{title}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: body.childMarkdownRemark.html }}
          />
        </div>
      </Layout>
    )
  }
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BlogPost

export const pageQuery = graphql`
  query blogPostQuery($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
