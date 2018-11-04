import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>JAMsnack</h1>
    <p>A web app to help making healthy eating decisions. Just take a picture of your food and see if it is healty or not.</p>

    <p>Happy Healty Snack Jamming!!!</p>

    <Link to="/page-2/">Check your food</Link>
    
  </Layout>
)

export default IndexPage
