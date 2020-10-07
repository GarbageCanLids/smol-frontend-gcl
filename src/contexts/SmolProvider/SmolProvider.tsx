import React, { createContext, useEffect, useState } from 'react'
import { useWallet } from 'use-wallet'
import { Smol } from '../../smol'



export interface SmolContext {
  smol?: typeof Smol
}

export const Context = createContext<SmolContext>({
  smol: undefined,
})

declare global {
  interface Window {
    smolsauce: any
  }
}

const SmolProvider: React.FC = ({ children }) => {
  const { ethereum }: { ethereum: any } = useWallet()
  const [smol, setSmol] = useState<any>()

  // @ts-ignore
  window.smol = smol
  // @ts-ignore
  window.eth = ethereum

  useEffect(() => {
    if (ethereum) {
      const chainId = Number(ethereum.chainId)
      const smolLib = new Smol(ethereum, chainId, false, {
        defaultAccount: ethereum.selectedAddress,
        defaultConfirmations: 1,
        autoGasMultiplier: 1.5,
        testing: false,
        defaultGas: '6000000',
        defaultGasPrice: '1000000000000',
        accounts: [],
        ethereumNodeTimeout: 10000,
      })
      setSmol(smolLib)
      window.smolsauce = smolLib
    }
  }, [ethereum])

  return <Context.Provider value={{ smol }}>{children}</Context.Provider>
}

export default SmolProvider
