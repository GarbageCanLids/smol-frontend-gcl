import React from 'react'
import { randomFloatInRange } from './util'
import { Styled } from './styles'

interface Props {
  size: number
}

const Star = ({
  size,
}: Props) => {
  const props = {
    size,
    animDelay: randomFloatInRange(2, 8),
    animTime: randomFloatInRange(0.5, 1.5),
    rotationDirection: Math.random() <= 0.5 ? 'LEFT' as const : 'RIGHT' as const
  }

  return <Styled.Star {...props} />
}

export default Star