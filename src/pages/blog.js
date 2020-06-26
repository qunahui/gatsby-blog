import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import blogStyles from './blog.module.scss'
import Head from '../components/head'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulBlogPost (
            sort:{
            fields: publishedDate,
                order: DESC
            }
        ){
            edges{
            node{
                title
                slug
                publishedDate(fromNow: true)
            }
            }
        }
    }
    `);
    return (
        <Layout>
            <Head title="Blog"/>
            <ol className={blogStyles.posts}>
                {
                data.allContentfulBlogPost.edges.map((edge,index) => {
                    return (
                        <Link key={index} to={`/blog/${edge.node.slug}`} className={blogStyles.post}>
                            <li>
                                <h1>{edge.node.title}</h1>
                            </li>
                            <p>{edge.node.publishedDate}</p>
                        </Link>
                    )
                })
                }
            </ol>
        </Layout>
    )
}

export default BlogPage