import { css, keyframes } from 'styled-components'

export class SmallStarAnims {

  static pulseSize = {
    properties: {
      start: css`
        transform: scale3d(0, 0, 0);
      `,
      end: css`
        transform: scale3d(1, 1, 1);
      `,
    },
    anim: (time: number, delay: number) => {
      const delayPercent = delay / (time + delay)
      const endPercent = (1 - delayPercent) * 100

      const { start, end } = SmallStarAnims.pulseSize.properties

      const animKeyFrames = keyframes`
      0% { ${start} }
      ${endPercent / 2}% { ${end} }
      ${endPercent}%, 100% { ${start} }
    `
      return css`${animKeyFrames} ease-in-out ${time + delay}s infinite ${delay}s`
    },
  }
}
