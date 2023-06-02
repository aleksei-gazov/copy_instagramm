import { DetailedHTMLProps, FC, InputHTMLAttributes, memo } from 'react'

import { FieldValues, UseFormRegister } from 'react-hook-form'

import cls from './Checkbox.module.scss'

type HTMLInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

interface CheckboxType extends HTMLInputProps {
  checked: boolean
  label?: string
  register?: UseFormRegister<FieldValues>
  nameForValidate?: string
}

export const Checkbox: FC<CheckboxType> = memo(props => {
  const { label, checked, className = '', register, nameForValidate, ...arg } = props

  const registerParam = nameForValidate && register && register(nameForValidate)

  return (
    <label className={cls.label}>
      <input
        type={'checkbox'}
        checked={checked}
        className={cls.realCheckbox}
        {...registerParam}
        {...arg}
      />
      <span className={cls.customCheckbox} />
      {label && <span className={cls.text}>{label}</span>}
    </label>
  )
})
