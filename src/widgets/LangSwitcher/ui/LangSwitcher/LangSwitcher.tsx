import { ChangeEvent, useState } from 'react'

import { useRouter } from 'next/router'

import { LanguageType } from './LangOption/LangOption'
import { LangSelect } from './LangSelect/LangSelect'

export const LangSwitcher = () => {
  const router = useRouter()

  const options: LanguageType[] = ['en', 'ru']

  const [language, setLanguage] = useState<LanguageType>(options[1])

  // const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
  //   router.push(
  //     {
  //       pathname: router.pathname,
  //       query: router.query,
  //     },
  //     undefined,
  //     { locale: e.target.value }
  //   )
  // }

  return <LangSelect options={options} value={language} onChange={() => {}} />
}
