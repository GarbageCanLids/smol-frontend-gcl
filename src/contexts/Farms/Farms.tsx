import React, { useState } from 'react'
import { useWallet } from 'use-wallet'
import useSmol from '../../hooks/useSmol'
import { getFarms } from '../../smol/utils'
import Context from './context'

const Farms: React.FC = ({ children }) => {
  const [unharvested, setUnharvested] = useState(0)

  const smol = useSmol()
  const { account } = useWallet()

  const farms = getFarms(smol)

  return (
    <Context.Provider
      value={{
        farms,
        unharvested,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Farms
