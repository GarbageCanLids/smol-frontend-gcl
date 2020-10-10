import React from 'react'
import styled from 'styled-components'
import smol from '../../assets/img/smol.svg'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import Balances from './components/Balances'

import { Star } from '../../components/Star'

const Home: React.FC = () => {
  return (
    <Page>
      <Star.Arrangement numLargeStars={5} numSmallStars={50} />
      <PageHeader
        icon={<img src={smol} height={160} />}
      />
      <Container>
        <Balances />
      </Container>
      <Spacer size="lg" />
      <Spacer size="lg" />
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
