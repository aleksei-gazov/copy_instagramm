import { ChangeEvent, DetailedHTMLProps, FC, InputHTMLAttributes, memo } from 'react'

import cls from './Checkbox.module.scss'

type HTMLInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

interface CheckboxType extends HTMLInputProps {
  label?: string
  checked: boolean
  onChangeChecked: (value: boolean) => void
}

export const Checkbox: FC<CheckboxType> = memo(props => {
  const { label, checked, className = '', onChangeChecked, ...arg } = props

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeChecked(e.currentTarget.checked)
  }

  return (
    <label className={cls.label}>
      <input
        type={'checkbox'}
        checked={checked}
        onChange={onChange}
        className={cls.realCheckbox}
        {...arg}
      />
      <span className={cls.customCheckbox} />
      {label && <span className={cls.text}>{label}</span>}
    </label>
  )
})
