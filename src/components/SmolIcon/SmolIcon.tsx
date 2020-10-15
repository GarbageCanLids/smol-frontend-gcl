import React from 'react'

interface SmolIconProps {
  size?: number
  v1?: boolean
  v2?: boolean
  v3?: boolean
}

const SmolIcon: React.FC<SmolIconProps> = ({ size = 36, v1, v2, v3 }) => (
  <span
    role="img"
    aria-label="smol"
    style={{
      fontSize: size,
      filter: v1 ? 'saturate(0.5)' : undefined,
    }}
  >
  🛸
   </span>
)

export default SmolIcon
