import React, { PropsWithChildren, ReactElement } from 'react'

import { NextPage } from 'next'
import { Provider } from 'react-redux'

import { Header } from '../Header'

import cls from './Layout.module.scss'

import { AuthProvider } from 'shared/hoc'
import { store } from 'store/store'

export const Layout: NextPage<PropsWithChildren> = props => {
  const { children } = props

  return (
    <Provider store={store}>
      <AuthProvider>
        <div className={cls.Layout}>
          <Header />
          {children}
        </div>
      </AuthProvider>
    </Provider>
  )
}

export const getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}
