import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'

import { MathUtil } from '../../../utils'
import useInterval from '../../../hooks/useInterval'

interface StyleProps {
  size: number
  top: number
  left: number
}

const TOTAL_ANIM_TIME = 2000;

const starSize = (size: number) => keyframes`
  0% {
    height: 0px;
    width: 0px;
  }
  33% {
    height: ${size}px;
    width: ${size}px;
  }
  100% {
    height: 0px;
    width: 0px;
  }
`

const tailSize = (size: number) => keyframes`
  0% {
    height: 0px;
    width: 0px;
    right: 0px;
    top: 0px;
  }
  33% {
    height: ${size - 4}px;
    width: ${size * 10}px;
    right: ${size / 2}px;
    top: 2px;
  }
  100% {
    height: 0%;
    width: 0%;
    right: 0px;
    top: 0px;
  }
`

const position = keyframes`
  0% {
    transform:
      translateX(-300px)
      translateY(-300px)
      rotate(45deg)
    ;
    }
    100% {
      transform:
        translateX(0px)
        translateY(0px)
        rotate(45deg)
    ;
  }
`

const StyledShootingStar = styled.div<StyleProps>`
  height: 0px;
  width: 0px;
  border-radius: 100%;
  background: white;
  
  position: relative;
  top: ${props => props.top}%;
  left: ${props => props.left}%;

  filter: drop-shadow(0 0 ${props => props.size / 2}px white);
  animation:
    ${props => starSize(props.size)} ${TOTAL_ANIM_TIME / 1000}s ease-in-out,
    ${position} ${TOTAL_ANIM_TIME / 1000}s ease-in-out
  ;
  
  transform:
    rotate(45deg)
  ;

  &::after {
    content: '';
    display: block;
    position: absolute;
    
    animation: ${props => tailSize(props.size)} ${TOTAL_ANIM_TIME / 1000}s ease-in-out;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 100%
    );
    clip-path: polygon(100% 0, 0 50%, 100% 100%);
  }
`

export const ShootingStar: React.FC = () => {
  const props = {
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: MathUtil.randomFloatInRange(12, 14),
    key: 1,
  }
  const [arr, setArr] = useState<React.ReactElement[]>([])
  useInterval(() => {
    // kinda hacky. I just need to clear this element completely
    // so the anim will restart properly
    setArr([])
    setArr([<StyledShootingStar {...props} />])
  }, 6000)

  return <>{arr}</>
}

