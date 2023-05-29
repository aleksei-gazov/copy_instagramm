import Image from 'next/image'
import { useRouter } from 'next/router'

import logOut from '../../../../public/icon/logOut.svg'

import cls from './Header.module.scss'

import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

export const Header = () => {
  const router = useRouter()

  return (
    <header className={cls.Header}>
      <Text tag={'span'} color={TextColorTheme.LIGHT} font={TextFontTheme.INTER_SEMI_BOLD_XL}>
        Inctagram
      </Text>
      <Button
        // disabled={true}
        // type={'submit'}
        className={cls.mb18}
        theme={ButtonTheme.Clear}
        size={ButtonSize.XXl}
      >
        <Image src={logOut} alt={'icon github'} width={90} height={150} />
      </Button>
    </header>
  )
}
