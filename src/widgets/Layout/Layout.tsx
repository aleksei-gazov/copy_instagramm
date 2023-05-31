import { PropsWithChildren, ReactElement } from 'react'

import { NextPage } from 'next'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import { Header } from '../Header'

import cls from './Layout.module.scss'

import { AuthProvider } from 'shared/hoc'
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
    <AuthProvider>
      <div className={cls.Layout}>
        <Header />
        {children}
      </div>
    </AuthProvider>
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
