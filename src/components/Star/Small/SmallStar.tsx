import React from 'react'
import styled from 'styled-components'

import { MathUtil } from '../../../utils'
import { SmallStarAnims } from './anims'

interface StyleProps {
  size: number
  animTime: number
  animDelay: number
}

const StyledSmallStar = styled.div<StyleProps>`
  background: white;
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  border-radius: 100%;
  filter: blur(${props => props.size / 4}px);
  ${SmallStarAnims.pulse.properties.start};
  animation: 
    ${({ animTime, animDelay }) => SmallStarAnims.pulse.anim(animTime, animDelay)}
  ;
`

export const SmallStar: React.FC = () => {
  const props = {
    size: MathUtil.randomFloatInRange(2, 5),
    animTime: MathUtil.randomFloatInRange(2, 4),
    animDelay: MathUtil.randomFloatInRange(1, 4),
  }

  return <StyledSmallStar {...props} />
}