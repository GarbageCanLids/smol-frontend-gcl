import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { useWallet } from 'use-wallet'
import smol from '../../assets/img/smol.svg'
import Button from '../../components/Button'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import WalletProviderModal from '../../components/WalletProviderModal'
import useModal from '../../hooks/useModal'
import Farm from '../Farm'
import FarmCards from './components/FarmCards'

const Farms: React.FC = () => {
  const { path } = useRouteMatch()
  const { account } = useWallet()
  const [onPresentWalletProviderModal] = useModal(<WalletProviderModal />)
  console.log('smol is:', smol)
  return (
    <Switch>
      <Page>
        {!!account ? (
          <>
            <Route exact path={path}>
              <PageHeader
                icon={<img src={smol} height="140" />}
                subtitle="earn smol tings to get big tings"
                title="smol tings rewards"
              />
              <FarmCards />
            </Route>
            <Route path={`${path}/:farmId`}>
              <Farm />
            </Route>
          </>
        ) : (
          <div
            style={{
              alignItems: 'center',
              display: 'flex',
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <Button
              onClick={onPresentWalletProviderModal}
              text="🔓 Unlock Smollet"
            />
          </div>
        )}
      </Page>
    </Switch>
  )
}

export default Farms
