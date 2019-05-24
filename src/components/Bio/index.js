import React from "react"
import container_styles from './bio.module.scss'
import Container from '../Elements/Container'

const Bio = () => (
  <Container direction="column" className={container_styles.bio_container}>
    <Container direction="column" padding="0.5rem" className={container_styles.bio}>
      <p><strong>Lucky Dragon</strong> is a one-chair barbershop in Stoke Newington that specialises in short haircuts for all ages and all genders.</p>
      <p>Trained at Toni & Guy, Marshal Darling spent four years working in two of London’s busiest, high-end barbershops before founding Lucky Dragon in 2019.</p>
      <p>Marshal’s mission is to encourage his clients to take time out of their busy London lives and restore their wellbeing, starting with their hairs and a hot towel.</p>
      <p className={container_styles.spacer}><i>“From his attentive cuts to his nourishing conversation and superb record collection, Marshal conjures a replenishing, holistic experience at Lucky Dragon that is second to none.”</i></p>
      <p>Sixty-minute haircut = <strong>£45</strong> | Fifteen-minute beard trim = <strong>£15</strong></p>
    </Container>
  </Container>
)

export default Bio
