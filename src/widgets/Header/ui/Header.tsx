import { useRouter } from 'next/router'

import cls from './Header.module.scss'

import { LogOutComponent } from 'features/auth/logOut/ui/LogOutComponent'
import { PATH } from 'shared/const/path'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

export const Header = () => {
  const { asPath } = useRouter()
  const hide = asPath === PATH.PROFILE_SETTING

  return (
    <header className={cls.Header}>
      <Text tag={'span'} color={TextColorTheme.LIGHT} font={TextFontTheme.INTER_SEMI_BOLD_XL}>
        Inctagram
      </Text>
      {hide && <LogOutComponent />}
    </header>
  )
}
