import React from 'react'
import styled from 'styled-components'

import { Small } from '../Small'
import { Large } from '../Large'
import { ShootingStar } from '../ShootingStar'

interface OuterContainerProps {
  width: string
  height: string
}

const OuterContainer = styled.div<OuterContainerProps>`
  position: fixed;
  height: ${p => p.height};
  width: ${p => p.width};
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
  width: string
  height: string
}

export const Arrangement: React.FC<Props> = ({
  numSmallStars,
  numLargeStars,
  width,
  height
}: Props) => {
  return (
    <OuterContainer width={width} height={height}>
      <InnerContainer>
        {
          Array.from(Array(numSmallStars).keys()).map((_, i) => <Small key={i} />)
        }
        {
          Array.from(Array(numLargeStars).keys()).map((_, i) => <Large key={i} />)
        }
        <ShootingStar />
      </InnerContainer>
    </OuterContainer>
  )
}