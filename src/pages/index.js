import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import HeroImage from "../components/HeroImage"
import TitleBanner from "../components/TitleBanner"
import PriceListRevealer from "../components/PriceListRevealer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`marshal`, `darling`, `lucky`, `dragon`, `hairs`, `barbering`]} />
    <HeroImage>
      <TitleBanner />
      <PriceListRevealer />
    </HeroImage>
  </Layout>
)

export default IndexPage
