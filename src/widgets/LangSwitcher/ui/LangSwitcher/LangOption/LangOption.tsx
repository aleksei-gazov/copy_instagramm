import FlagRussia from '../../../../../../public/icon/flag-russia.svg'
import FlagUnitedKingdom from '../../../../../../public/icon/flag-united-kingdom.svg'

import cls from './LangOption.module.scss'
interface LanguageOptionProps {
  language: LanguageType
}

export type LanguageType = 'en' | 'ru'

export const LangOption = ({ language }: LanguageOptionProps) => {
  let FlagIcon
  let label

  switch (language) {
    case 'en':
      FlagIcon = FlagUnitedKingdom
      label = 'English'
      break
    case 'ru':
      FlagIcon = FlagRussia
      label = 'Russian'
      break
    default:
      FlagIcon = FlagUnitedKingdom
      label = 'English'
  }

  return (
    <div className={cls.container}>
      <FlagIcon />
      <div>{label}</div>
    </div>
  )
}
