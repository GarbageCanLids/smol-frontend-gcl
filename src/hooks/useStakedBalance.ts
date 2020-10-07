// import BigNumber from 'bignumber.js'
// import { useCallback, useEffect, useState } from 'react'
// import { useWallet } from 'use-wallet'
// import { getMasterChefContract, getStaked } from '../smol/utils'
// import useBlock from './useBlock'
// import useSmol from './useSmol'



 const useStakedBalance = (pid: number) => {
//   const [balance, setBalance] = useState(new BigNumber(0))
//   const { account }: { account: string } = useWallet()
//   const smol = useSmol()
//   const masterChefContract = getMasterChefContract(smol)
//   const block = useBlock()

//   const fetchBalance = useCallback(async () => {
//     const balance = await getStaked(masterChefContract, pid, account)
//     setBalance(new BigNumber(balance))
//   }, [account, pid, smol])

//   useEffect(() => {
//     if (account && smol) {
//       fetchBalance()
//     }
//   }, [account, pid, setBalance, block, smol])

//   return balance
 }
 export default useStakedBalance
