import { keyframes, css } from 'styled-components'

export class ShootingStarAnims {
  
  static position = {
    anim: () => {
      const animKeyframes = keyframes`
        0% {
          transform: rotate(45deg) translate(-300px, -300px);
        }
        100% {
          transform: rotate(45deg) translate(0px, 0px);
        }
      `

      return css`${animKeyframes} 2s ease-in-out`
    }
  //   properties: {
  //     start: css`transform: rotate(45deg) translateX(-300px) translateY(-150px);`,
  //     end: css`transform: rotate(45deg) translateX(0px) translateY(0px);`,
  //   },
  //   anim: (time: number, delay: number) => {
  //     const delayPercent = delay / (time + delay)
  //     const endPercent = (1 - delayPercent) * 100
  //     const { start, end } = ShootingStarAnims.position.properties
  //     const animKeyFrames = keyframes`
  //       0% { ${start} }
  //       ${endPercent }% { ${end} }
  //       ${endPercent}%, 100% { ${end} }
  //     `
  //     return css`${animKeyFrames} ease-in-out ${time + delay}s infinite ${delay}s`

  //   }
  }

  static starSize = {
    properties: {
      start: css`
        height: 0px;
        width: 0px;
      `,
      end: (size: number) => css`
        height: ${size}px;
        width: ${size}px;
      `,
    },
    anim: (size: number, time: number, delay: number) => {
      console.log('size:', size)
      const delayPercent = delay / (time + delay)
      const endPercent = (1 - delayPercent) * 100
      const { start, end } = ShootingStarAnims.starSize.properties
      const animKeyFrames = keyframes`
        0% { ${start} }
        ${endPercent / 2}% { ${end(size)} }
        ${endPercent}%, 100% { ${start} }
      `
      return css`${animKeyFrames} ease-in-out ${time + delay}s infinite ${delay}s`
    }
  }

  static tailSize = {
    properties: {
      start: css`
        height: 0px;
        width: 0px;
        right: 0px;
        top: 0px;
      `,
      end: (size: number) => css`
        height: ${size - 4}px;
        width: ${size * 10}px;
        right: ${size / 2}px;
        top: 2px;
      `,
    },
    anim: (size: number, time: number, delay: number) => {
      const delayPercent = delay / (time + delay)
      const endPercent = (1 - delayPercent) * 100
      const { start, end } = ShootingStarAnims.tailSize.properties
      const animKeyFrames = keyframes`
        0% { ${start} }
        ${endPercent / 3}% { ${end(size)} }
        ${endPercent}%, 100% { ${start} }
      `
      return css`${animKeyFrames} ease-in-out ${time + delay}s infinite ${delay}s`
    }
  }
}