import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Products = () => (
  <Layout>
    <SEO title="Products page" />
    <h1>Hi from the Products page</h1>
    <p>Welcome to Products</p>
    <Link to="/">Home</Link>
  </Layout>
)

export default Products
