import { PropsWithChildren, ReactElement } from 'react'

import { NextPage } from 'next'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import { Header } from '../Header'

import cls from './Layout.module.scss'

import { AuthProvider } from 'shared/hoc'
import { store } from 'store/store'

export const Layout: NextPage<PropsWithChildren> = props => {
  const { children } = props

  return (
    <div className={cls.Layout}>
      <Header />
      {children}
    </div>
  )
}

export const getLayout = (page: ReactElement) => {
  return (
    <>
      <Provider store={store}>
        <Layout>{page}</Layout>
        <ToastContainer />
      </Provider>
    </>
  )
}
