import React from 'react'

import Image from 'next/image'

import confirmPageImage from '../../../../../../public/icon/bro.svg'

import cls from 'features/auth/registration-confirmation/ui/Confirmation/Confirmation.module.scss'
import { PATH } from 'shared/const/path'
import { NavLink } from 'shared/ui/NavLink/Navlink'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

export const Confirmation = () => {
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
      <NavLink className={cls.signInLink} href={PATH.LOGIN}>
        <Text tag={'span'} font={TextFontTheme.INTER_REGULAR_L} color={TextColorTheme.LIGHT}>
          Sign In
        </Text>
      </NavLink>
      <Image src={confirmPageImage} alt="bro" />
    </div>
  )
}
