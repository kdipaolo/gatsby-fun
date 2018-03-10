import React from 'react'
import Link from 'gatsby-link'

export default ({ post }) => {
    return (
        <article>
            <h3><Link to={post.fields.slug}>{post.frontmatter.title}</Link></h3>
            <span>{post.frontmatter.date}</span>
            <p>{post.excerpt}</p>
            {/* <div dangerouslySetInnerHTML={{
                __html: post.html
            }}></div> */}
        </article>
    )
}
