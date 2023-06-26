import FlagRussia from '../../../../../../public/icon/flag-russia.svg'
import FlagUnitedKingdom from '../../../../../../public/icon/flag-united-kingdom.svg'

import cls from './LangOption.module.scss'
interface LanguageOptionProps {
  language: LanguageType
}

export type LanguageType = 'english' | 'russian'

export const LangOption = ({ language }: LanguageOptionProps) => {
  let FlagIcon

  switch (language) {
    case 'english':
      FlagIcon = FlagUnitedKingdom
      break
    case 'russian':
      FlagIcon = FlagRussia
      break
    default:
      FlagIcon = null
  }

  const label = language.charAt(0).toUpperCase() + language.slice(1)

  return (
    <div className={cls.container}>
      <FlagIcon />
      <div>{label}</div>
    </div>
  )
}
