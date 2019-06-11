/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Container from '../components/Elements/Container'
import SocialIcon from '../components/Elements/SocialIcon'

import instagram from '../images/instagram.png'
import spotify from '../images/spotify.png'
import vimeo from '../images/vimeo.png'

// import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <div
          style={{
            margin: `0 auto`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer>
            <Container height="100%">
              <SocialIcon link="https://www.instagram.com/lookingsharpdarling/" icon={instagram} />
              {/* <SocialIcon link="https://open.spotify.com/playlist/7C2L5Gg10PD1WP3nzuorBu" icon={spotify} width="100px"/> */}
              <SocialIcon link="https://open.spotify.com/playlist/7C2L5Gg10PD1WP3nzuorBu" icon={spotify} />
              {/* <SocialIcon link="https://open.spotify.com/playlist/7C2L5Gg10PD1WP3nzuorBu" icon={vimeo} /> */}
            </Container>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
