import reCAPTCHA from 'react-google-recaptcha'
import { FieldValues } from 'react-hook-form'

import s from './PasswordRecovery.module.scss'

import { PATH } from 'shared/const/path'
import { useFormHandler } from 'shared/hooks/useFormHandler'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { NavLink, NavLinkColor } from 'shared/ui/NavLink/Navlink'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'
export const PasswordRecovery = () => {
  const { errorEmail, isValid, register, handleSubmit } = useFormHandler('email')
  const onSubmit = (data: FieldValues) => {
    console.log(data)
  }

  return (
    <form className={s.PasswordRecoveryForm} onSubmit={handleSubmit(onSubmit)}>
      <Text
        className={s.alignSelfCenter}
        tag={'h2'}
        font={TextFontTheme.INTER_BOLD_XL}
        color={TextColorTheme.LIGHT}
      >
        Forgot Password
      </Text>

      <Input
        register={register}
        nameForValidate={'email'}
        error={errorEmail}
        placeholder={'Epam@epam.com'}
        title={'Email'}
        className={s.mb24}
      />

      <NavLink className={s.alignSelfEnd} href={'#'} color={NavLinkColor.GREY}>
        <Text tag={'span'} font={TextFontTheme.INTER_REGULAR_L}>
          Enter your email address and we will send you further instructions
        </Text>
      </NavLink>

      <Button
        disabled={!isValid}
        type={'submit'}
        className={s.mb18}
        theme={ButtonTheme.PRIMARY}
        size={ButtonSize.XXl}
      >
        <Text tag={'span'} font={TextFontTheme.INTER_SEMI_BOLD_L} color={TextColorTheme.LIGHT}>
          Send Link
        </Text>
      </Button>

      <NavLink className={s.alignSelfCenter} href={PATH.LOGIN} color={NavLinkColor.SECONDARY}>
        Back to Sign In
      </NavLink>
      <div>
        <reCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} />
      </div>
    </form>
  )
}
