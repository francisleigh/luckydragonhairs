import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroImage from "../components/HeroImage"
import Bio from '../components/Bio'
import BioImage from '../components/BioImage'

import Container from '../components/Elements/Container'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`marshal`, `darling`, `lucky`, `dragon`, `hairs`, `barbering`]} />
    <Container direction="column">
      <HeroImage>
        <Container height="100%" theme="light" responsive={true}
          style={{
            boxShadow: `0px 1px 20px pink`
          }}>

            <Bio />
            <BioImage />

        </Container>
      </HeroImage>
    </Container>
  </Layout>
)

export default IndexPage
