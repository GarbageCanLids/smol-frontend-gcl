import { css, keyframes } from 'styled-components'

export class LargeStarAnims {

  static rotation = {
    properties: {
      start: css`transform: rotate(0deg);`,
      end: (dir: 'LEFT' | 'RIGHT') => css`transform: rotate(${dir === 'RIGHT' ? '90deg' : '-90deg'});`,
    },
    anim: (dir: 'LEFT' | 'RIGHT', time: number, delay: number) => {
      const delayPercent = delay / (time + delay)
      const endPercent = (1 - delayPercent) * 100
      const { start, end } = LargeStarAnims.rotation.properties

      const animKeyFrames = keyframes`
      0% { ${start} }
      ${endPercent}%, 100% { ${end(dir)} }
    `
      return css`${animKeyFrames} ease-in-out ${time + delay}s infinite ${delay}s`
    },
  }

  static lineSize = {
    properties: {
      start: css`background-size: 65% 2px, 2px 65%;`,
      end: css`background-size: 100% 2px, 2px 100%;`,
    },
    anim: (time: number, delay: number) => {
      const delayPercent = delay / (time + delay)
      const endPercent = (1 - delayPercent) * 100

      const { start, end } = LargeStarAnims.lineSize.properties

      const animKeyFrames = keyframes`
      0% { ${start} }
      ${endPercent / 2}% { ${end} }
      ${endPercent}%, 100% { ${start} }
    `
      return css`${animKeyFrames} ease-in-out ${time + delay}s infinite ${delay}s`
    },
  }

  static circleSize = {
    properties: {
      start: (size: number) => css`
        height: ${size * 0.15}px;
        width: ${size * 0.15}px;
        top: calc(50% - ${(size * 0.15) / 2}px);
        left: calc(50% - ${(size * 0.15) / 2}px);
        filter: blur(${size * 0.02}px);
      `,
      end: (size: number) => css`
        height: ${size * 0.25}px;
        width: ${size * 0.25}px;
        top: calc(50% - ${(size * 0.25) / 2}px);
        left: calc(50% - ${(size * 0.25) / 2}px);
        filter: blur(${size * 0.04}px);
      `,
    },
    anim: (size: number, time: number, delay: number) => {
      const delayPercent = delay / (time + delay)
      const endPercent = (1 - delayPercent) * 100
      const { start, end } = LargeStarAnims.circleSize.properties

      const animKeyFrames = keyframes`
      0% { ${start(size)} }
      ${endPercent / 2}% { ${end(size)} }
      ${endPercent}%, 100% { ${start(size)} }
    `
      return css`${animKeyFrames} ease-in-out ${time + delay}s infinite ${delay}s`
    },
  }
}

