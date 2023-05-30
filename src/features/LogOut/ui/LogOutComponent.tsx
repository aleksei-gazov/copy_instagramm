import Image from 'next/image'

import logOutImg from '../../../../public/icon/logOut.svg'

import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import cls from 'widgets/Header/ui/Header.module.scss'

type PropsType = {
  setShowModal: (set: boolean) => void
}

export const LogOutComponent = ({ setShowModal }: PropsType) => {
  const logOutHandler = () => {
    setShowModal(true)
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
