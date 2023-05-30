import { PropsWithChildren, ReactElement } from 'react'

import { NextPage } from 'next'
import { Provider } from 'react-redux'

import { Header } from '../Header'

import cls from './Layout.module.scss'

import { store } from 'store/store'

export const Layout: NextPage<PropsWithChildren> = props => {
  const { children } = props

  return (
    <div className={cls.Layout}>
      <Provider store={store}>
        <Header />
        {children}
      </Provider>
    </div>
  )
}

export const getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}
