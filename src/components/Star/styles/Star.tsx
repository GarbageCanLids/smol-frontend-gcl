import styled from 'styled-components'
import { AnimUtil } from './util'

interface StyleProps {
  size: number
  animDelay: number
  animTime: number
  rotationDirection: 'LEFT' | 'RIGHT'
}

export const Star = styled.div<StyleProps>`
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  animation:
    ${({ animTime, animDelay, rotationDirection }) => AnimUtil.rotation(rotationDirection, animTime, animDelay)},
    ${({ animTime, animDelay }) => AnimUtil.lineSize(animTime, animDelay)}
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
  ${AnimUtil.startProperties.lineSize};
  background-position: center;
  background-repeat: no-repeat;

  position: relative;

  &::after {
    content: '';
    background: white;
    border-radius: 100%;
    position: absolute;
    ${props => AnimUtil.startProperties.circleSize(props.size)};
    animation:
      ${({ size, animTime, animDelay }) => AnimUtil.circleSize(size, animTime, animDelay)}
    ;
  }
`


