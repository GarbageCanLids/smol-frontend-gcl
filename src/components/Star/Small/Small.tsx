import React from 'react'
import styled, { keyframes } from 'styled-components'

import { MathUtil } from '../../../utils'

interface StyleProps {
  size: number
  animTime: number
  animDelay: number
  top: number
  left: number
}

const pulse = keyframes`
  0% {
    transform: scale3d(0, 0, 0);
  }
  50% {
    transform: scale3d(1, 1, 1);
  }
  100% {
    transform: scale3d(0, 0, 0);
  }
`

const StyledSmall = styled.div<StyleProps>`
  background: white;
  position: absolute;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  border-radius: 100%;
  filter: blur(${props => props.size / 4}px);
  animation: ${pulse} ${props => props.animTime}s ease-in-out infinite alternate ${props => props.animDelay}s;
`
export const Small: React.FC = () => {
  const props = {
    size: MathUtil.randomFloatInRange(2, 5),
    animTime: MathUtil.randomFloatInRange(2, 4),
    animDelay: MathUtil.randomFloatInRange(1, 4),
    top: Math.random() * 100,
    left: Math.random() * 100,
  }

  return <StyledSmall {...props} />
}