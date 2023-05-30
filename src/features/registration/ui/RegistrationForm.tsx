import Image from 'next/image'
import { FieldValues } from 'react-hook-form'

import github from '../../../../public/icon/github-svgrepo-com.svg'
import google from '../../../../public/icon/google-svgrepo-com.svg'
import formCls from '../../../styles/AuthFormsStyles.module.scss'

import cls from './RegistrationForm.module.scss'

import { useRegisterMutation } from 'features/registration/service/registration'
import { useFormHandler } from 'shared/hooks/useFormHandler'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { NavLink, NavLinkColor } from 'shared/ui/NavLink/Navlink'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

export const RegistrationForm = () => {
  const [registration, { data: registerData }] = useRegisterMutation()

  const {
    errorName,
    errorEmail,
    errorPassword,
    errorConfirmPassword,
    isValid,
    register,
    handleSubmit,
  } = useFormHandler('name', 'email', 'password', 'confirmPassword')

  const onSubmit = (data: FieldValues) => {
    const payload = {
      userName: data.name,
      email: data.email,
      password: data.password,
    }

    registration(payload)
  }

  return (
    <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
      <Text
        tag={'h2'}
        className={formCls.alignSelfCenter}
        font={TextFontTheme.INTER_BOLD_XL}
        color={TextColorTheme.LIGHT}
      >
        Sign Up
      </Text>

      <div className={formCls.iconContainer}>
        <Button className={formCls.transform} theme={ButtonTheme.Clear}>
          <Image src={google} alt={'icon google'} width={36} height={36} />
        </Button>
        <Button className={formCls.transform} theme={ButtonTheme.Clear}>
          <Image src={github} alt={'icon github'} width={36} height={36} />
        </Button>
      </div>

      <Input
        register={register}
        nameForValidate={'name'}
        error={errorName}
        placeholder={'Epam'}
        title={'Username'}
        className={cls.mb36}
      />

      <Input
        register={register}
        nameForValidate={'email'}
        error={errorEmail}
        placeholder={'Epam@epam.com'}
        title={'Email'}
        className={cls.mb36}
      />

      <Input
        register={register}
        nameForValidate={'password'}
        error={errorPassword}
        type={'password'}
        placeholder={'Password'}
        title={'Password'}
        className={cls.mb36}
      />

      <Input
        register={register}
        nameForValidate={'confirmPassword'}
        error={errorConfirmPassword}
        type={'password'}
        placeholder={'Password confirmation'}
        title={'Password confirmation'}
        className={cls.mb36}
      />

      <Button
        disabled={!isValid}
        type={'submit'}
        className={cls.mb18}
        theme={ButtonTheme.PRIMARY}
        size={ButtonSize.XXl}
      >
        <Text tag={'span'} font={TextFontTheme.INTER_SEMI_BOLD_L} color={TextColorTheme.LIGHT}>
          Sign Up
        </Text>
      </Button>

      <Text
        className={`${cls.mb12} ${formCls.alignSelfCenter}`}
        tag={'p'}
        color={TextColorTheme.LIGHT}
        font={TextFontTheme.INTER_REGULAR_XL}
      >
        Do you have an account?
      </Text>

      <NavLink className={cls.alignSelfCenterPure} href={'#'} color={NavLinkColor.SECONDARY}>
        Sign In
      </NavLink>
    </form>
  )
}
