import { PropsWithChildren, ReactElement, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css'

import { NextPage } from 'next'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import { Header } from '../Header'

import cls from './Layout.module.scss'

import { Portal } from 'shared/ui/Portal/Portal'
import { store } from 'store/store'

export const Layout: NextPage<PropsWithChildren> = props => {
  const { children } = props
  // const [logOut] = useLogOutMutation()
  //TODO
  const email = 'MAIL' //modal
  const [showModal, setShowModal] = useState<boolean>(false) //modal
  const closeModal = () => {
    setShowModal(false)
  }
  const onSubmit = () => {
    //TODO
    console.log('logOut')
    // logOut()
    setShowModal(false)
    //TODO
    //навигация на логин
  }

  return (
    <div className={cls.Layout}>
      <Header setShowModal={setShowModal} />
      {children}
      {/*<Modal title={'Log Out'} active={showModal} onClose={closeModal} onSubmit={onSubmit}>*/}
      {/*  <div>{`Are you really want to log out of your account ${email} ?`}</div>*/}
      {/*</Modal>*/}
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
