import Image from 'next/image'
import { useRouter } from 'next/router'

import logOutImg from '../../../../public/icon/logOut.svg'

import { clearToken } from 'features/login'
import { useLogOutMutation } from 'features/LogOut/service/logOut'
import { PATH } from 'shared/const/path'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { Loader } from 'shared/ui/Loader/Loader'
import cls from 'widgets/Header/ui/Header.module.scss'

type PropsType = {
  setShowModal: (set: boolean) => void
}

export const LogOutComponent = ({ setShowModal }: PropsType) => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const [logOut, { isLoading }] = useLogOutMutation()
  const logOutHandler = () => {
    logOut()
      .unwrap()
      .then(() => {
        dispatch(clearToken())
        router.push(PATH.LOGIN)
      })
  }

  if (isLoading) return <Loader />

  return (
    <Button className={cls.mb18} theme={ButtonTheme.Clear} onClick={logOutHandler}>
      <Image src={logOutImg} alt={'icon github'} width={90} height={150} />
    </Button>
  )
}
