import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroImage from "../components/HeroImage"
import TitleBanner from "../components/TitleBanner"

import Container from '../components/Elements/Container'

import {palette} from '../components/Elements/style.common'

const content_container_styles = {
  flexGrow: 1,
  maxWidth: '900px'
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`marshal`, `darling`, `lucky`, `dragon`, `hairs`, `barbering`]} />
    <HeroImage>
      <TitleBanner padding="1rem" />
      <Container height="100%"style={{maxHeight: '800px'}} responsive>
        <Container theme="light" margin=".5rem" padding="1rem" style={content_container_styles} height="100%">
          <h3 style={{color: palette.dark}}>Container 1 Bio</h3>
        </Container>
        <Container theme="dark" margin=".5rem" padding="1rem" style={content_container_styles} height="100%">
          <h3 style={{color: palette.light}}>Container 2 Bio</h3>
        </Container>
      </Container>
    </HeroImage>
  </Layout>
)

export default IndexPage
