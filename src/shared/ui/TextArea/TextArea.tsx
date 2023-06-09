import { ChangeEvent, FC, InputHTMLAttributes } from 'react'

import { FieldValues, UseFormRegister } from 'react-hook-form'

import { classNames } from 'shared/lib/classNames/classNames'
import { TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'
import cls from 'shared/ui/TextArea/TextArea.module.scss'

type HTMLTextAreaProps = Omit<InputHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange'>

interface TextAreaProps extends HTMLTextAreaProps {
  className?: string
  font?: TextFontTheme
  color?: TextColorTheme
  onChange?: (value: string) => void
  value?: string
  register?: UseFormRegister<FieldValues>
  nameForValidate?: string
}

export const TextArea: FC<TextAreaProps> = ({
  className = '',
  font = 'interRegularM',
  color = '',
  title,
  value,
  placeholder = 'Text-area',
  register,
  nameForValidate = '',
  disabled = false,
  onChange,
  ...otherProps
}) => {
  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(e.target.value)
    }
  }

  const registerParam = nameForValidate && register && register(nameForValidate)

  return (
    <label className={classNames(cls.label, { [cls.disabled]: disabled }, [])}>
      {title}
      <textarea
        {...otherProps}
        {...registerParam}
        onChange={onChangeHandler}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        className={classNames(cls.textArea, {}, [className])}
      ></textarea>
    </label>
  )
}
