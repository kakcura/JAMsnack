import React from 'react'
import { Link } from 'gatsby'

const headerContainer = {
  background: 'black',
  marginBottom: '1.45rem',
  display: 'flex',
  boxShadow: '0 3px 20px 0 gray',
}

const pageContainer = {
  margin: '0 auto',
  maxWidth: 960,
  padding: '1.45rem 1.0875rem',
}

const link = {
  color: 'white',
  textDecoration: 'none',
}

const Header = ({ siteTitle }) => (
  <div style={headerContainer}>
    <div style={pageContainer}>
      <h2 style={{margin: 0}}>
        <Link to="/" style={link}>
          Home
        </Link>
      </h2>
    </div>
    <div style={pageContainer}>
      <h2 style={{margin: 0}}>
        <Link to="/page-2" style={link}>
          Check your food
        </Link>
      </h2>
    </div>
  </div>
)

export default Header
