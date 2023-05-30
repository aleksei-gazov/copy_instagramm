import { useRouter } from 'next/router'

import cls from './Header.module.scss'

import { LogOutComponent } from 'features/LogOut/ui/LogOutComponent'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

export const Header = () => {
  const router = useRouter()

  return (
    <header className={cls.Header}>
      <Text tag={'span'} color={TextColorTheme.LIGHT} font={TextFontTheme.INTER_SEMI_BOLD_XL}>
        Inctagram
      </Text>
      <LogOutComponent />
    </header>
  )
}
