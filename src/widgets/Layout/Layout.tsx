import { PropsWithChildren, ReactElement } from 'react'

import { NextPage } from 'next'

import { Header } from '../Header'

import cls from './Layout.module.scss'

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
  return <Layout>{page}</Layout>
}
