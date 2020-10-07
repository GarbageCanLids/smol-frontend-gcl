import { useContext } from 'react'
import { Context } from '../contexts/SmolProvider'

const useSmol = () => {
  const { smol } = useContext(Context)
  return smol
}

export default useSmol
