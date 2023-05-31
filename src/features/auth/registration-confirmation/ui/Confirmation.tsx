import Image from 'next/image'

import confirmPageImage from '../../../../../public/icon/bro.svg'

import cls from './Confirmation.module.scss'

import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

const Confirmation = () => {
  return (
    <div className={cls.container}>
      <Text
        tag={'h2'}
        font={TextFontTheme.INTER_BOLD_XL}
        color={TextColorTheme.LIGHT}
        className={cls.mb19}
      >
        Congratulations!
      </Text>
      <Text
        tag={'p'}
        font={TextFontTheme.INTER_REGULAR_L}
        color={TextColorTheme.LIGHT}
        className={cls.mb54}
      >
        Your email has been confirmed
      </Text>
      <Button type={'submit'} className={cls.mb72} theme={ButtonTheme.PRIMARY} size={ButtonSize.M}>
        <Text tag={'span'} font={TextFontTheme.INTER_REGULAR_L} color={TextColorTheme.LIGHT}>
          Sign In
        </Text>
      </Button>
      <Image src={confirmPageImage} alt="bro" />
    </div>
  )
}

export default Confirmation
