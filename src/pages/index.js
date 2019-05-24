import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroImage from "../components/HeroImage"
import TitleBanner from "../components/TitleBanner"
import Bio from '../components/Bio'

import Container from '../components/Elements/Container'
import Revealer from '../components/Elements/Revealer'

import {palette} from '../components/common/styles.common'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`marshal`, `darling`, `lucky`, `dragon`, `hairs`, `barbering`]} />
    <Container direction="column">
      <HeroImage>
        <TitleBanner padding="1rem" />
        <Container height="100%" style={{maxHeight: '500px', maxWidth: '800px'}} className="responsive">
          <Revealer buttonText="Bio" colors={[palette.light, palette.dark]}>
            <Bio />
          </Revealer>
          <Revealer buttonText="Book">
            <Container theme="light">
              <h3>Booking</h3>
              <p>i am the booking menu</p>
            </Container>
          </Revealer>
        </Container>
      </HeroImage>
    </Container>
  </Layout>
)

export default IndexPage
