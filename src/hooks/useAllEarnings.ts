import BigNumber from 'bignumber.js'
import { useCallback, useEffect, useState } from 'react'
import { useWallet } from 'use-wallet'
import { provider } from 'web3-core'
import { getFarms } from '../smol/utils'
import useBlock from './useBlock'
import useSmol from './useSmol'



const useAllEarnings = () => {
  const [balances, setBalance] = useState([] as Array<BigNumber>)
  const { account }: { account: string; ethereum: provider } = useWallet()
  const smol = useSmol()
  const farms = getFarms(smol)
  const block = useBlock()

  const fetchAllBalances = useCallback(async () => {
    setBalance(balances)
  }, [account, smol])

  useEffect(() => {
    if (account && smol) {
      fetchAllBalances()
    }
  }, [account, block, setBalance, smol])

  return balances
}

export default useAllEarnings
