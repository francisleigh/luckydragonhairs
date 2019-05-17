import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact page" />
    <h1>Hi from the Contact page</h1>
    <p>Welcome to Contact</p>
    <Link to="/">Home</Link>
  </Layout>
)

export default Contact
