import Image from 'next/image'
import { FieldValues } from 'react-hook-form'

import github from '../../../../public/icon/github-svgrepo-com.svg'
import google from '../../../../public/icon/google-svgrepo-com.svg'

import cls from './LoginForm.module.scss'

import { useFormHandler } from 'shared/hooks/useFormHandler'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { NavLink, NavLinkColor } from 'shared/ui/NavLink/Navlink'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

export const LoginForm = () => {
  const { errorLoginPassword, errorEmail, isValid, register, handleSubmit } = useFormHandler(
    'email',
    'loginPassword'
  )
  const onSubmit = (data: FieldValues) => {
    console.log(data)
  }

  return (
    <form className={cls.LoginForm} onSubmit={handleSubmit(onSubmit)}>
      <Text
        className={cls.alignSelfCenter}
        tag={'h2'}
        font={TextFontTheme.INTER_BOLD_XL}
        color={TextColorTheme.LIGHT}
      >
        Sign In
      </Text>

      <div className={cls.iconContainer}>
        <Button theme={ButtonTheme.Clear}>
          <Image src={google} alt={'icon google'} width={36} height={36} />
        </Button>
        <Button theme={ButtonTheme.Clear}>
          <Image src={github} alt={'icon github'} width={36} height={36} />
        </Button>
      </div>

      <Input
        register={register}
        nameForValidate={'email'}
        error={errorEmail}
        placeholder={'Epam@epam.com'}
        title={'Email'}
        className={cls.mb24}
      />
      <Input
        nameForValidate={'loginPassword'}
        register={register}
        error={errorLoginPassword}
        type={'password'}
        placeholder={'Epam@epam.com'}
        title={'Password'}
        className={cls.mb60}
      />

      <NavLink className={cls.alignSelfEnd} href={'#'} color={NavLinkColor.GREY}>
        <Text tag={'span'} font={TextFontTheme.INTER_REGULAR_L}>
          Forgot Password
        </Text>
      </NavLink>

      <Button
        disabled={!isValid}
        type={'submit'}
        className={cls.mb18}
        theme={ButtonTheme.PRIMARY}
        size={ButtonSize.XXl}
      >
        <Text tag={'span'} font={TextFontTheme.INTER_SEMI_BOLD_L} color={TextColorTheme.LIGHT}>
          Sign In
        </Text>
      </Button>
      <Text
        className={`${cls.mb12} ${cls.alignSelfCenter}`}
        tag={'p'}
        color={TextColorTheme.LIGHT}
        font={TextFontTheme.INTER_REGULAR_XL}
      >
        Don’t have an account?
      </Text>
      <NavLink className={cls.alignSelfCenter} href={'#'} color={NavLinkColor.SECONDARY}>
        Sign Up
      </NavLink>
    </form>
  )
}
