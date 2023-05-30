import React, { PropsWithChildren, ReactElement } from 'react'

import { NextPage } from 'next'
import { Provider } from 'react-redux'

import { Header } from '../Header'

import cls from './Layout.module.scss'

import { store } from 'store/store'

export const Layout: NextPage<PropsWithChildren> = props => {
  const { children } = props

  return (
    <Provider store={store}>
      <div className={cls.Layout}>
        <Header />
        {children}
      </div>
    </Provider>
  )
}

export const getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}
