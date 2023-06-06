import cls from './ErrorPage.module.scss'

import { PATH } from 'shared/const/path'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'
import { getLayout } from 'widgets/Layout/Layout'

const ErrorPage = () => {
  const reload = () => {
    location.assign(PATH.HOME)
  }

  return (
    <div className={cls.ErrorPage}>
      <div className={cls.innerWrapper}>
        <Text tag={'p'} font={TextFontTheme.INTER_SEMI_BOLD_XL} color={TextColorTheme.LIGHT}>
          OOPS
        </Text>
        <Text
          className={cls.mb20}
          tag={'p'}
          font={TextFontTheme.INTER_SEMI_BOLD_L}
          color={TextColorTheme.LIGHT}
        >
          An unexpected error occurred
        </Text>
        <Button onClick={reload} theme={ButtonTheme.PRIMARY} size={ButtonSize.XXl}>
          Go to home page
        </Button>
      </div>
    </div>
  )
}

ErrorPage.getLayout = getLayout

export default ErrorPage
