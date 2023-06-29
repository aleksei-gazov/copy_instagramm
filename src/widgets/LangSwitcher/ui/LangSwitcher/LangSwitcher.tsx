import { useState } from 'react'

import { useRouter } from 'next/router'

import { LanguageType } from './LangOption/LangOption'
import { LangSelect } from './LangSelect/LangSelect'

export const LangSwitcher = () => {
  const router = useRouter()
  const { locale, locales } = router

  const [selectedLanguage, setSelectedLanguage] = useState(locale)

  const onChange = (language: LanguageType) => {
    setSelectedLanguage(language)

    router.push(
      {
        pathname: router.pathname,
        query: router.query,
      },
      undefined,
      { locale: language }
    )
  }

  return (
    <LangSelect
      options={locales as LanguageType[]}
      value={selectedLanguage as LanguageType}
      onChange={onChange}
    />
  )
}
