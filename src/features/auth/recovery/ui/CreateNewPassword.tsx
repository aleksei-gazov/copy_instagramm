import { memo } from 'react'

import { useRouter } from 'next/router'
import { FieldValues } from 'react-hook-form'

import { useCreateNewPasswordMutation } from '../service/createNewPassword'

import s from './CreateNewPassword.module.scss'

import { PATH } from 'shared/const/path'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'
import { useFormHandler } from 'shared/hooks/useFormHandler'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Loader } from 'shared/ui/Loader/Loader'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

export const CreateNewPasswordForm = memo(() => {
  const [createNewPassword, { isLoading }] = useCreateNewPasswordMutation()
  const router = useRouter()
  const { code } = router.query

  const { errorPassword, errorConfirmPassword, isValid, register, handleSubmit } = useFormHandler(
    'password',
    'confirmPassword'
  )

  const dispatch = useAppDispatch()
  const onSubmit = (data: FieldValues) => {
    const payload = {
      newPassword: data.password,
      recoveryCode: code as string,
    }

    createNewPassword(payload)
      .unwrap()
      .then(() => {
        router.push(PATH.LOGIN)
      })
  }

  if (isLoading) return <Loader />

  return (
    <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
      <Text
        tag={'h2'}
        className={s.alignSelfCenter}
        font={TextFontTheme.INTER_BOLD_XL}
        color={TextColorTheme.LIGHT}
      >
        Create New Password
      </Text>
      <Input
        register={register}
        nameForValidate={'password'}
        error={errorPassword}
        type={'password'}
        title={'New password'}
        className={s.mb36}
      />

      <Input
        register={register}
        nameForValidate={'confirmPassword'}
        error={errorConfirmPassword}
        type={'password'}
        title={'Password confirmation'}
        className={s.mb36}
      />
      <Text
        className={`${s.mb12} ${s.alignSelfCenter}`}
        tag={'p'}
        color={TextColorTheme.LIGHT}
        font={TextFontTheme.INTER_REGULAR_XL}
      >
        Your password must be between 6 and 20 characters
      </Text>
      <Button
        disabled={!isValid}
        type={'submit'}
        className={s.mb18}
        theme={ButtonTheme.PRIMARY}
        size={ButtonSize.XXl}
      >
        <Text tag={'span'} font={TextFontTheme.INTER_SEMI_BOLD_L} color={TextColorTheme.LIGHT}>
          Create New Password
        </Text>
      </Button>
    </form>
  )
})
