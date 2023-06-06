import { FieldValues } from 'react-hook-form'

import Github from '../../../../../../public/icon/github-svgrepo-com.svg'
import Google from '../../../../../../public/icon/google-svgrepo-com.svg'

import formCls from 'features/auth/logOut/ui/AuthFormsStyles.module.scss'
import { setEmail } from 'features/auth/registration/model/slice/registrationSlice'
import { useRegisterMutation } from 'features/auth/registration/service/registration'
import cls from 'features/auth/registration/ui/RegistrationForm/RegistrationForm.module.scss'
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

export const RegistrationForm = ({ setIsModalOpen }: RegistrationFormType) => {
  const [registration, { isLoading }] = useRegisterMutation()

  const {
    errorName,
    errorEmail,
    errorPassword,
    errorConfirmPassword,
    isValid,
    register,
    handleSubmit,
  } = useFormHandler('name', 'email', 'password', 'confirmPassword')

  const dispatch = useAppDispatch()
  const onSubmit = (data: FieldValues) => {
    const payload = {
      userName: data.name,
      email: data.email,
      password: data.password,
    }

    dispatch(setEmail({ email: data.email }))

    registration(payload)
      .unwrap()
      .then(() => {
        setIsModalOpen(true)
      })
  }

  if (isLoading) return <Loader />

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
          <Google width={36} height={36} />
        </Button>
        <Button className={formCls.transform} theme={ButtonTheme.Clear}>
          <Github width={36} height={36} />
        </Button>
      </div>

      <Input
        register={register}
        nameForValidate={'name'}
        error={errorName}
        placeholder={'Epam'}
        title={'Username'}
      />
      <div className={cls.h36}></div>

      <Input
        register={register}
        nameForValidate={'email'}
        error={errorEmail}
        placeholder={'Epam@epam.com'}
        title={'Email'}
      />
      <div className={cls.h36}></div>
      <Input
        register={register}
        nameForValidate={'password'}
        error={errorPassword}
        type={'password'}
        placeholder={'Password'}
        title={'Password'}
      />
      <div className={cls.h36}></div>
      <Input
        register={register}
        nameForValidate={'confirmPassword'}
        error={errorConfirmPassword}
        type={'password'}
        placeholder={'Password confirmation'}
        title={'Password confirmation'}
      />
      <div className={cls.h36}></div>
      <Button disabled={!isValid} type={'submit'} theme={ButtonTheme.PRIMARY} size={ButtonSize.XXl}>
        <Text tag={'span'} font={TextFontTheme.INTER_SEMI_BOLD_L} color={TextColorTheme.LIGHT}>
          Sign Up
        </Text>
      </Button>
      <div className={cls.h18}></div>
      <Text
        className={formCls.alignSelfCenter}
        tag={'p'}
        color={TextColorTheme.LIGHT}
        font={TextFontTheme.INTER_REGULAR_XL}
      >
        Do you have an account?
      </Text>
      <div className={cls.h12}></div>

      <NavLink className={cls.alignSelfCenterPure} href={PATH.LOGIN} color={NavLinkColor.SECONDARY}>
        Sign In
      </NavLink>
    </form>
  )
}
