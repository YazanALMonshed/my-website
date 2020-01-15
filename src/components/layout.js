/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <div className="background-img">
        <div className="container">
          <div className="section-header">
              <nav className="navbar-home">
                  <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/concat">Concat</Link></li>
                    <li><Link to="/work">Work</Link></li>
                  </ul>
              </nav>
              <div className="intro-about-me">
                  <h1>Yazan Al Monshed</h1>
                  <p>web developer & software developer</p>
              </div>
          </div>
          </div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
