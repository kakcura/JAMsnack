import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>JAM Snack</h1>
    <p>This is a an app, we built as a part of Jamstack Hackathon. Modern web development architecture based on client-side JavaScript. 
    </p>
    <Link to="/page-2/">Reasons I Should Consider JAMstack</Link>
    
  </Layout>
)

export default IndexPage
