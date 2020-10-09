import React from 'react'
import styled from 'styled-components'

import { MathUtil } from '../../../utils'
import { LargeStarAnims } from './anims'

interface StyleProps {
  size: number
  animDelay: number
  animTime: number
  rotationDirection: 'LEFT' | 'RIGHT'
}

export const StyledLargeStar = styled.div<StyleProps>`
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  animation:
    ${({ animTime, animDelay, rotationDirection }) => LargeStarAnims.rotation.anim(rotationDirection, animTime, animDelay)},
    ${({ animTime, animDelay }) => LargeStarAnims.lineSize.anim(animTime, animDelay)}
  ;

  background:
    linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 2%,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 0) 98%),
    
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 2%,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 0) 98%)
  ;
  ${LargeStarAnims.lineSize.properties.start};
  background-position: center;
  background-repeat: no-repeat;

  position: relative;

  &::after {
    content: '';
    background: white;
    border-radius: 100%;
    position: absolute;
    ${props => LargeStarAnims.circleSize.properties.start(props.size)};
    animation:
      ${({ size, animTime, animDelay }) => LargeStarAnims.circleSize.anim(size, animTime, animDelay)}
    ;
  }
`

export const LargeStar: React.FC = () => {
  const props = {
    size: MathUtil.randomFloatInRange(25, 150),
    animDelay: MathUtil.randomFloatInRange(2, 8),
    animTime: MathUtil.randomFloatInRange(0.5, 1.5),
    rotationDirection: Math.random() <= 0.5 ? 'LEFT' as const : 'RIGHT' as const
  }

  return <StyledLargeStar {...props} />
}


