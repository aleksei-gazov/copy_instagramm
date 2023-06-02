import { useState } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/router'

import logOutImg from '../../../../../public/icon/logOut.svg'

import { clearToken } from 'features/auth/login'
import { Modal } from 'features/auth/logOut/modal/modal'
import { useLogOutMutation } from 'features/auth/logOut/service/logOut'
import { PATH } from 'shared/const/path'
import { useAuthQuery } from 'shared/hoc/service/authProvider'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Loader } from 'shared/ui/Loader/Loader'
import { Text, TextFontTheme } from 'shared/ui/Text/Text'
import cls from 'widgets/Header/ui/Header.module.scss'

export const LogOutComponent = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const logOutHandler = () => {
    setShowModal(true)
  }
  const [logOut, { isLoading }] = useLogOutMutation()
  const { data: user } = useAuthQuery()
  const email = user?.email
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
        <Text
          tag={'p'}
          font={TextFontTheme.INTER_REGULAR_XL}
        >{`Are you really want to log out of your account`}</Text>
        <Text tag={'span'} font={TextFontTheme.INTER_BOLD_M}>{`"${email}" ?`}</Text>
      </Modal>
    </>
  )
}
