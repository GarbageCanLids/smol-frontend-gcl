// import BigNumber from 'bignumber.js'
// import { useCallback, useEffect, useState } from 'react'
// import { useWallet } from 'use-wallet'
// import { provider } from 'web3-core'
// import { getEarned } from '../smol/utils'
// import useBlock from './useBlock'
// import useSmol from './useSmol'



 const useEarnings = (pid: number) => {
//   const [balance, setBalance] = useState(new BigNumber(0))
//   const {
//     account,
//     ethereum,
//   }: { account: string; ethereum: provider } = useWallet()
//   const smol = useSmol()
//   const block = useBlock()

//   const fetchBalance = useCallback(async () => {
//     const balance = await getEarned(masterChefContract, pid, account)
//     setBalance(new BigNumber(balance))
//   }, [account, smol])

//   useEffect(() => {
//     if (account && smol) {
//       fetchBalance()
//     }
//   }, [account, block, setBalance, smol])

//   return balance
 }

export default useEarnings
