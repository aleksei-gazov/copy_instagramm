import { PropsWithChildren, ReactElement, useState } from 'react'

import { NextPage } from 'next'
import { Provider } from 'react-redux'

import { Modal } from '../../features/LogOut/modal/modal'
import { useLogOutMutation } from '../../features/LogOut/service/logOut'
import { Header } from '../Header'

import cls from './Layout.module.scss'

import { AuthProvider } from 'shared/hoc'
import { store } from 'store/store'

export const Layout: NextPage<PropsWithChildren> = props => {
  const { children } = props
  const [logOut] = useLogOutMutation()
  const email = 'MAIL' //modal
  const [showModal, setShowModal] = useState<boolean>(false) //modal
  const closeModal = () => {
    setShowModal(false)
  }
  const onSubmit = () => {
    //TODO
    console.log('logOut')
    logOut()
  }

  return (
    <AuthProvider>
      <div className={cls.Layout}>
        <Header setShowModal={setShowModal} />
        {children}
        <Modal title={'Log Out'} active={showModal} onClose={closeModal} onSubmit={onSubmit}>
          <div>{`Are you really want to log out of your account ${email} ?`}</div>
        </Modal>
      </div>
    </AuthProvider>
  )
}

export const getLayout = (page: ReactElement) => {
  return (
    <Provider store={store}>
      <Layout>{page}</Layout>{' '}
    </Provider>
  )
}
