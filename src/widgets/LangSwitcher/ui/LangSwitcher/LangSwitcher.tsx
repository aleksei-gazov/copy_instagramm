import { useState } from 'react'

import { LanguageType } from './LangOption/LangOption'
import { LangSelect } from './LangSelect/LangSelect'

export const LangSwitcher = () => {
  const options: LanguageType[] = ['english', 'russian']

  const [language, setLanguage] = useState<LanguageType>(options[1])

  const onChange = (language: LanguageType) => {
    setLanguage(language)
  }

  return <LangSelect options={options} value={language} onChange={onChange} />
}
