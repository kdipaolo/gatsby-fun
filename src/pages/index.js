import React from 'react'
import PostListing from '../components/Posts/PostListing';

const IndexPage = ({ data }) => (
  <div>
    <h1>Posts</h1>
    {data.allMarkdownRemark.edges.map(({ node }) => <PostListing key={node.id} post={node} />)}

  </div>
)

export default IndexPage


export const query = graphql`
  query SiteMeta{
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: {
      fields: [frontmatter___date],
      order: DESC
    }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString:"DD/MM/YYYY")
          }
          fields {
            slug
          }
          excerpt
          html
        }
      }
    }

  }
  
`