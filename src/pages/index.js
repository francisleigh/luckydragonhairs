import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroImage from "../components/HeroImage"
import TitleBanner from "../components/TitleBanner"

import Container from '../components/Elements/Container'
import Revealer from '../components/Elements/Revealer'

import {palette} from '../components/Elements/style.common'

const content_container_styles = {
  flexGrow: 1,
  maxWidth: '900px'
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`marshal`, `darling`, `lucky`, `dragon`, `hairs`, `barbering`]} />
    <Container direction="column">
      <HeroImage>
        <TitleBanner padding="1rem" />
        <Container height="100%"style={{maxHeight: '800px'}} className="responsive">
          <Container theme="light" margin=".5rem" style={content_container_styles} height="100%">
            <Revealer buttonText="Bio">
              <div>
                <h3 style={{color: palette.dark}}>Bio</h3>
                <p>i am the bio</p>
              </div>
            </Revealer>
          </Container>
          <Container theme="dark" margin=".5rem" style={content_container_styles} height="100%">
            <h3 style={{color: palette.light}}>Book</h3>
          </Container>
        </Container>
      </HeroImage>
    </Container>
  </Layout>
)

export default IndexPage
