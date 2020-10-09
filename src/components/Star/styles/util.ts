import { css, keyframes } from 'styled-components'

const animProperties = {
  rotation: {
    start: css`transform: rotate(0deg);`,
    end: (dir: 'LEFT' | 'RIGHT') => css`transform: rotate(${dir === 'RIGHT' ? '90deg' : '-90deg'});`,
  },

  lineSize: {
    start: css`background-size: 65% 2px, 2px 65%;`,
    end: css`background-size: 100% 2px, 2px 100%;`,
  },

  circleSize: {
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
  }
}

export const AnimUtil = {
  // used to give css defaults, as our anims are delayed
  startProperties: {
    lineSize: animProperties.lineSize.start,
    circleSize: animProperties.circleSize.start,
  },

  lineSize: (time: number, delay: number) => {
    const delayPercent = delay / (time + delay)
    const endPercent = (1 - delayPercent) * 100

    const { start, end } = animProperties.lineSize

    const animKeyFrames = keyframes`
      0% { ${start} }
      ${endPercent / 2}% { ${end} }
      ${endPercent}%, 100% { ${start} }
    `
    return css`${animKeyFrames} ease-in-out ${time + delay}s infinite ${delay}s`
  },

  circleSize: (size: number, time: number, delay: number) => {
    const delayPercent = delay / (time + delay)
    const endPercent = (1 - delayPercent) * 100
    const { start, end } = animProperties.circleSize

    const animKeyFrames = keyframes`
      0% { ${start(size)} }
      ${endPercent / 2}% { ${end(size)} }
      ${endPercent}%, 100% { ${start(size)} }
    `
    return css`${animKeyFrames} ease-in-out ${time + delay}s infinite ${delay}s`
  },

  rotation: (dir: 'LEFT' | 'RIGHT', time: number, delay: number) => {
    const delayPercent = delay / (time + delay)
    const endPercent = (1 - delayPercent) * 100
    const { start, end } = animProperties.rotation
    
    const animKeyFrames = keyframes`
      0% { ${start} }
      ${endPercent}%, 100% { ${end(dir)} }
    `
    return css`${animKeyFrames} ease-in-out ${time + delay}s infinite ${delay}s`
  },
}
