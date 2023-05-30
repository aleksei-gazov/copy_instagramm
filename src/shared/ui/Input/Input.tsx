import React, { ChangeEvent, FC, InputHTMLAttributes, memo, useState } from 'react'

import Image from 'next/image'
import { FieldValues, UseFormRegister } from 'react-hook-form'

import eyeOff from '../../../../public/icon/eye-off-outline.svg'
import eyeOn from '../../../../public/icon/eye-outline.svg'

import cls from './Input.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text, TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputType extends HTMLInputProps {
  error?: string
  register?: UseFormRegister<FieldValues>
  nameForValidate?: string
  onChange?: (value: string) => void
  className?: string
}

export const Input: FC<InputType> = memo(
  ({
    type = 'text',
    title = '',
    placeholder = '',
    onChange,
    error,
    register,
    nameForValidate = '',
    className = '',
    ...arg
  }) => {
    const [typeInput, setTypeInput] = useState<string>(type)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.currentTarget.value)
    }
    const showPasswordHandler = () => {
      typeInput === 'password' ? setTypeInput('text') : setTypeInput('password')
    }

    const registerParam = nameForValidate && register && register(nameForValidate)

    const iconPas = typeInput === 'password' ? eyeOn : eyeOff

    return (
      <label className={cls.label}>
        {title}
        <input
          autoComplete={'off'}
          {...arg}
          {...registerParam}
          className={classNames(cls.Input, {}, [className])}
          type={typeInput}
          placeholder={placeholder}
          onChange={onChangeHandler}
        />
        {type === 'password' && (
          <Button className={cls.btn} theme={ButtonTheme.Clear} onClick={showPasswordHandler}>
            <Image src={iconPas} alt={'icon eye'} width={24} height={24} />
          </Button>
        )}
        {error && (
          <Text
            tag={'span'}
            color={TextColorTheme.ERROR}
            font={TextFontTheme.INTER_REGULAR_L}
            className={cls.errorText}
          >
            {error}
          </Text>
        )}
      </label>
    )
  }
)
