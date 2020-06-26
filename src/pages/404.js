import React from 'react'
import Layout from '../components/layout';
import { Link } from 'gatsby';
import Head from '../components/head'

const NotFound = () => {
    return (
        <Layout title="404">
            <h1>Page not found</h1>
            <p><Link to="/">Go to home</Link></p>
        </Layout>
    )
}
export default NotFound;

