import React from 'react'

import useTranslation from 'next-translate/useTranslation'

import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'
import { getLayout } from 'widgets/Layout/Layout'

const Favorites = () => {
  const { t } = useTranslation('common')

  return (
    <Text tag={'span'} font={TextFontTheme.INTER_BOLD_S} color={TextColorTheme.LIGHT}>
      {t('favorites')}
    </Text>
  )
}

Favorites.getLayout = getLayout

export default Favorites
