import React, { Component } from 'react'

export default class PostPage extends Component {
    render() {
        return (
            <div>
                <p>{this.props.data.markdownRemark.frontmatter.date}</p>
                <h1>{this.props.data.markdownRemark.frontmatter.title}</h1>

                <div dangerouslySetInnerHTML={{
                    __html: this.props.data.markdownRemark.html
                }}>

                </div>
                <p>{this.props.data.markdownRemark.excerpt}</p>
            </div>
        )
    }
}

export const query = graphql`
    query BlogPostQuery($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
            excerpt
            html
            frontmatter {
                title
                date(formatString:"DD/MM/YYYY")
            }
        }
    }
`   