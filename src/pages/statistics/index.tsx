import React from 'react'

import { useRouter } from 'next/router'

import en from '../../../public/locales/en/en'
import ru from '../../../public/locales/ru/ru'

import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'
import { getLayout } from 'widgets/Layout/Layout'

const Statistics = () => {
  const { locale } = useRouter()

  const t = locale === 'en' ? en : ru

  console.log(t)

  return (
    <Text tag={'span'} font={TextFontTheme.INTER_BOLD_S} color={TextColorTheme.LIGHT}>
      <div>{t.title}</div>
      Statistics
    </Text>
  )
}

Statistics.getLayout = getLayout

export default Statistics
