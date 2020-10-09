import { css, keyframes } from 'styled-components'

export class AnimUtil {

  static pulseSize = {
    startProperties: css`
      transform: scale3d(0, 0, 0);
    `,
    endProperties: css`
      transform: scale3d(1, 1, 1);
    `,
    anim: (time: number, delay: number) => {
      const delayPercent = delay / (time + delay)
      const endPercent = (1 - delayPercent) * 100

      const { startProperties, endProperties } = AnimUtil.pulseSize

      const animKeyFrames = keyframes`
      0% { ${startProperties} }
      ${endPercent / 2}% { ${endProperties} }
      ${endPercent}%, 100% { ${startProperties} }
    `
      return css`${animKeyFrames} ease-in-out ${time + delay}s infinite ${delay}s`
    },
  }
}
