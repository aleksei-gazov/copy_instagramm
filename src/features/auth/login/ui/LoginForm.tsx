import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

import Github from '../../../../../public/icon/github-svgrepo-com.svg'
import Google from '../../../../../public/icon/google-svgrepo-com.svg'
import { ControlledInputNew } from '../../../../shared/ui/ControlledInput/ControlledInput'

import cls from './LoginForm.module.scss'

import { useLoginMutation } from 'features/auth/login/authByEmail/service/authByEmail'
import formCls from 'features/auth/logOut/ui/AuthFormsStyles.module.scss'
import { PATH } from 'shared/const/path'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { Loader } from 'shared/ui/Loader/Loader'
import { NavLink, NavLinkColor } from 'shared/ui/NavLink/Navlink'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

// Вынести в отдельный файл
// --------------------------------------------------------------------------------
const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
})

type FormData = yup.InferType<typeof loginSchema>
const useLoginForm = () => {
  return useForm<FormData>({
    mode: 'onSubmit',
    resolver: yupResolver(loginSchema),
  })
}
// --------------------------------------------------------------------------------

export const LoginForm = () => {
  const router = useRouter()
  const [login, { isLoading, isSuccess }] = useLoginMutation()
  const { control, handleSubmit } = useLoginForm()

  const onSubmit = handleSubmit(data => {
    login(data)
  })

  if (isLoading) return <Loader />

  if (isSuccess) {
    router.push(PATH.HOME)

    return <></>
  }

  return (
    <form className={cls.form} onSubmit={onSubmit}>
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

      <ControlledInputNew
        control={control}
        name={'email'}
        type={'email'}
        placeholder={'Epam@epam.com'}
        title={'Email'}
      />
      <div className={cls.h24}></div>
      <ControlledInputNew
        control={control}
        name={'password'}
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
      <Button type={'submit'} theme={ButtonTheme.PRIMARY} size={ButtonSize.XXl}>
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
