import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>What is JAMstack?</h1>
    <p>Modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup.</p>
    <Link to="/page-2/">Reasons I Should Consider JAMstack</Link>
  </Layout>
)

export default IndexPage
