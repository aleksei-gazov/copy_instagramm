import { useRouter } from 'next/router'
import { FieldValues } from 'react-hook-form'

import Github from '../../../../../public/icon/github-svgrepo-com.svg'
import Google from '../../../../../public/icon/google-svgrepo-com.svg'

import cls from './LoginForm.module.scss'

import { useLoginMutation } from 'features/auth/login/authByEmail/service/authByEmail'
import formCls from 'features/auth/logOut/ui/AuthFormsStyles.module.scss'
import { PATH } from 'shared/const/path'
import { useFormHandler } from 'shared/hooks/useFormHandler'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Loader } from 'shared/ui/Loader/Loader'
import { NavLink, NavLinkColor } from 'shared/ui/NavLink/Navlink'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

export const LoginForm = () => {
  const router = useRouter()
  const [login, { isLoading, isSuccess }] = useLoginMutation()
  const { errorLoginPassword, errorEmail, isValid, register, handleSubmit } = useFormHandler(
    'email',
    'loginPassword'
  )

  const onSubmit = (data: FieldValues) => {
    const payload = {
      email: data.email,
      password: data.loginPassword,
    }

    login(payload)
  }

  if (isLoading) return <Loader />

  if (isSuccess) {
    router.push(PATH.HOME)

    return <></>
  }

  return (
    <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
      <Text
        className={formCls.alignSelfCenter}
        tag={'h2'}
        font={TextFontTheme.INTER_BOLD_XL}
        color={TextColorTheme.LIGHT}
      >
        Sign In
      </Text>

      <div className={formCls.iconContainer}>
        <Button className={formCls.transform} theme={ButtonTheme.Clear}>
          <Google width={36} height={36} />
        </Button>
        <Button className={formCls.transform} theme={ButtonTheme.Clear}>
          <Github width={36} height={36} />
        </Button>
      </div>

      <input name="f_email" style={{ display: 'none' }} type="email" />
      <input name="f_password" style={{ display: 'none' }} type="password" />

      <Input
        register={register}
        nameForValidate={'email'}
        error={errorEmail}
        type={'email'}
        placeholder={'Epam@epam.com'}
        title={'Email'}
      />
      <div className={cls.h24}></div>
      <Input
        nameForValidate={'loginPassword'}
        register={register}
        error={errorLoginPassword}
        type={'password'}
        placeholder={'Epam@epam.com'}
        title={'Password'}
      />
      <div className={cls.h60}></div>
      <NavLink className={cls.alignSelfEnd} href={PATH.PASSWORD_RECOVERY} color={NavLinkColor.GREY}>
        <Text tag={'span'} font={TextFontTheme.INTER_REGULAR_L}>
          Forgot Password
        </Text>
      </NavLink>
      <div className={cls.h24}></div>
      <Button disabled={!isValid} type={'submit'} theme={ButtonTheme.PRIMARY} size={ButtonSize.XXl}>
        <Text tag={'span'} font={TextFontTheme.INTER_SEMI_BOLD_L} color={TextColorTheme.LIGHT}>
          Sign In
        </Text>
      </Button>
      <div className={cls.h18}></div>
      <Text
        className={formCls.alignSelfCenter}
        tag={'p'}
        color={TextColorTheme.LIGHT}
        font={TextFontTheme.INTER_REGULAR_XL}
      >
        Don’t have an account?
      </Text>
      <div className={cls.h12}></div>
      <NavLink
        className={formCls.alignSelfCenter}
        href={PATH.REGISTRATION}
        color={NavLinkColor.SECONDARY}
      >
        Sign Up
      </NavLink>
    </form>
  )
}
