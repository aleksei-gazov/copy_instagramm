import { FC, memo, useState } from 'react'

import { useRouter } from 'next/router'

import Logout from '../../../../../public/icon/log-out.svg'

import cls from './AuthFormsStyles.module.scss'

import { clearToken } from 'features/auth/login'
import { Modal } from 'features/auth/logOut/modal/modal'
import { useLogOutMutation } from 'features/auth/logOut/service/logOut'
import { PATH } from 'shared/const/path'
import { getAuthMeData } from 'shared/hoc/model/selectors/getAuthMeData/getAuthMeData'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useAppSelector } from 'shared/hooks/useAppSelector'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Loader } from 'shared/ui/Loader/Loader'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

interface LogOutComponentProps {
  className?: string
}

export const LogOutComponent: FC<LogOutComponentProps> = memo(({ className = '' }) => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const logOutHandler = () => {
    setShowModal(true)
  }
  const [logOut, { isLoading }] = useLogOutMutation()
  const authMeData = useAppSelector(getAuthMeData)
  const email = authMeData?.email
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
    <div className={classNames('', {}, [])}>
      <Button className={cls.btn} theme={ButtonTheme.Clear} onClick={logOutHandler}>
        <Logout />
        <Text
          tag={'span'}
          className={className}
          font={TextFontTheme.INTER_MEDIUM_L}
          color={TextColorTheme.LIGHT}
        >
          Log Out
        </Text>
      </Button>
      <Modal title={'Log Out'} active={showModal} onClose={closeModal} onSubmit={onSubmit}>
        <Text
          tag={'p'}
          font={TextFontTheme.INTER_REGULAR_XL}
        >{`Are you really want to log out of your account`}</Text>
        <Text tag={'span'} font={TextFontTheme.INTER_BOLD_M}>{`"${email}" ?`}</Text>
      </Modal>
    </div>
  )
})
