import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>JAM Snack</h1>
    <p>This is a an app, we built as a part of Jamstack Hackathon.  
    </p>
    <Link to="/page-2/">Our Project Here:</Link>
    
  </Layout>
)

export default IndexPage
