import { useState } from 'react'

import ReCAPTCHA from 'react-google-recaptcha'
import { FieldValues } from 'react-hook-form'

import { usePasswordRecoveryMutation } from 'features/auth/passwordRecovery/service/passwordRecoveryApi'
import s from 'features/auth/passwordRecovery/ui/PasswordRecovery.module.scss'
import { setEmail } from 'features/auth/registration/model/slice/registrationSlice'
import { PATH } from 'shared/const/path'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useFormHandler } from 'shared/hooks/useFormHandler'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Loader } from 'shared/ui/Loader/Loader'
import { NavLink, NavLinkColor } from 'shared/ui/NavLink/Navlink'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

type RegistrationFormType = {
  setIsModalOpen: (value: boolean) => void
}

export const PasswordRecovery = ({ setIsModalOpen }: RegistrationFormType) => {
  const [passwordRecovery, { isLoading }] = usePasswordRecoveryMutation()
  const { errorEmail, isValid, register, handleSubmit } = useFormHandler('email')
  const [token, setToken] = useState<string | null>(null)

  const dispatch = useAppDispatch()

  const onSubmit = (data: FieldValues) => {
    if (!token) {
      return
    }
    dispatch(setEmail({ email: data.email }))
    passwordRecovery({
      email: data.email,
      recaptcha: token,
    })
      .unwrap()
      .then(() => {
        setIsModalOpen(true)
      })
  }

  const onChange = (value: string | null) => {
    setToken(value)
  }

  if (isLoading) return <Loader />

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
        <ReCAPTCHA sitekey="6LeY2y0mAAAAANwI_paCWfoksCgBm1n2z9J0nwNQ" onChange={onChange} />
      </div>
    </form>
  )
}
