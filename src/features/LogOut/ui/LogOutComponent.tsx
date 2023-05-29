import Image from 'next/image'

import logOutImg from '../../../../public/icon/logOut.svg'

import { useLogOutMutation } from 'features/LogOut/service/logOut'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import cls from 'widgets/Header/ui/Header.module.scss'

export const LogOutComponent = () => {
  const [logOut] = useLogOutMutation()
  const logOutHandler = () => {
    logOut('')
  }

  return (
    <Button
      // disabled={true}
      // type={'submit'}
      className={cls.mb18}
      theme={ButtonTheme.Clear}
      size={ButtonSize.XXl}
      onClick={logOutHandler}
    >
      <Image src={logOutImg} alt={'icon github'} width={90} height={150} />
    </Button>
  )
}
