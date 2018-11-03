import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Reasons I Should Consider JAMstack</h1>
    <p>For faster development. A JAMstack website as it is just pre-built HTML and assets, all which can be served over a CDN.</p>
    <Link to="/">What is JAMstack?</Link>
  </Layout>
)

export default SecondPage

// my code here
