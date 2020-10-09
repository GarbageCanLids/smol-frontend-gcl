import React from 'react'
import { MathUtil } from '../../utils'
import { Styled } from './styles'

interface Props {
  size: number
}

const Star = ({
  size,
}: Props) => {
  const props = {
    size,
    animDelay: MathUtil.randomFloatInRange(2, 8),
    animTime: MathUtil.randomFloatInRange(0.5, 1.5),
    rotationDirection: Math.random() <= 0.5 ? 'LEFT' as const : 'RIGHT' as const
  }

  return <Styled.Star {...props} />
}

export default Star