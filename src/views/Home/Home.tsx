import React from 'react'
import styled from 'styled-components'
import smol from '../../assets/img/smol.svg'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import Balances from './components/Balances'

import { LargeStar } from '../../components/Star'

const Home: React.FC = () => {
  return (
    <Page>
      <PageHeader
        icon={<img src={smol} height={120} />}
        title="big tings, smol pkgs"
        subtitle="collect them all"
      />

      <Container>
        <Balances />
      </Container>
      <Spacer size="lg" />
      <StyledInfo>
       🛸 <b>Tip</b>: smol tings are super rewarding 🛸
      </StyledInfo>
      <Spacer size="lg" />
      <LargeStar />
      <div
        style={{
          margin: '0 auto',
        }}
      >
        <Button text="about smol" to="/about" variant="secondary" />
      </div>
    </Page>
  )
}

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.grey[500]};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;

  > b {
    color: ${(props) => props.theme.color.grey[600]};
  }
`

export default Home
