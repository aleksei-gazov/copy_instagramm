import { useRouter } from 'next/router'

import cls from './Header.module.scss'

import { LogOutComponent } from 'features/LogOut/ui/LogOutComponent'
import { PATH } from 'shared/const/path'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

type PropsType = {
  setShowModal: (set: boolean) => void
}
export const Header = ({ setShowModal }: PropsType) => {
  const { asPath } = useRouter()

  return (
    <header className={cls.Header}>
      <Text tag={'span'} color={TextColorTheme.LIGHT} font={TextFontTheme.INTER_SEMI_BOLD_XL}>
        Inctagram
      </Text>
      {asPath === PATH.HOME && <LogOutComponent setShowModal={setShowModal} />}
    </header>
  )
}
