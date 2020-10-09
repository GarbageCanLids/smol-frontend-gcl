import React from 'react'
import styled from 'styled-components'

import { Small } from '../Small'
import { Large } from '../Large'

const OuterContainer = styled.div`
  position: fixed;
  height: 75vh; /* this is coupled to our particular background image */
  width: 100vw;
  left: 0;
  top: 0;
  z-index: -1;
`

const InnerContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`
interface Props {
  numSmallStars: number
  numLargeStars: number
}

export const Arrangement: React.FC<Props> = ({
  numSmallStars,
  numLargeStars,
}: Props) => {
  return (
    <OuterContainer>
      <InnerContainer>
        {
          Array.from(Array(numSmallStars).keys()).map((_, i) => <Small key={i} />)
        }
        {
          Array.from(Array(numLargeStars).keys()).map((_, i) => <Large key={i} />)
        }
      </InnerContainer>
    </OuterContainer>
  )
}