import React from 'react'
import styled from 'styled-components'

import { Header } from './Header'
import { Footer } from './Footer'

interface Props {
  subtitle?: string
  title?: string
}

const Page: React.FC<Props> = ({
  title,
  subtitle,
  children
}) => (
  <StyledPage>
    <Header title={title} subtitle={subtitle} />
    <StyledMain>{children}</StyledMain>
    <Footer />
  </StyledPage>
)

const StyledPage = styled.div``

const StyledMain = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - ${(props) => props.theme.topBarSize * 2}px);
`

export default Page