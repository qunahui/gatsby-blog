import React from 'react'
import { Link } from 'gatsby'
import Head from '../components/head'
import Layout from "../components/layout"

const AboutPage = () => {
    return (
        <Layout title="About">
            <h1>About Me</h1>
            <p>I currently lay at home and code some shitty website.</p>
            <p><Link to="/contact">Want to work with me? Reach out.</Link></p>
        </Layout>
    )
}

export default AboutPage