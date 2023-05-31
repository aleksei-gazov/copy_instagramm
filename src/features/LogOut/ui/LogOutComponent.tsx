import { useState } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/router'

import logOutImg from '../../../../public/icon/logOut.svg'

import { clearToken } from 'features/login'
import { Modal } from 'features/LogOut/modal/modal'
import { useLogOutMutation } from 'features/LogOut/service/logOut'
import { PATH } from 'shared/const/path'
import { useAuthQuery } from 'shared/hoc/service/authProvider'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Loader } from 'shared/ui/Loader/Loader'
import cls from 'widgets/Header/ui/Header.module.scss'

export const LogOutComponent = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const logOutHandler = () => {
    setShowModal(true)
  }
  const [logOut, { isLoading }] = useLogOutMutation()
  const { data } = useAuthQuery()
  const mail = data?.email
  const [showModal, setShowModal] = useState<boolean>(false) //modal
  const closeModal = () => {
    setShowModal(false)
  }
  const onSubmit = () => {
    logOut()
      .unwrap()
      .then(() => {
        dispatch(clearToken())
        router.push(PATH.LOGIN)
      })
    setShowModal(false)
  }

  if (isLoading) return <Loader />

  return (
    <>
      <Button className={cls.mb18} theme={ButtonTheme.Clear} onClick={logOutHandler}>
        <Image src={logOutImg} alt={'icon github'} width={90} height={150} />
      </Button>
      <Modal title={'Log Out'} active={showModal} onClose={closeModal} onSubmit={onSubmit}>
        <div>{`Are you really want to log out of your account ${mail} ?`}</div>
      </Modal>
    </>
  )
}
