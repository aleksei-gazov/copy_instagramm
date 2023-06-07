import React, { FC, InputHTMLAttributes } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'
import { TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'
import cls from 'shared/ui/TextArea/TextArea.module.scss'

type HTMLTextAreaProps = Omit<InputHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange'>

interface TextAreaProps extends HTMLTextAreaProps {
  className?: string
  font?: TextFontTheme
  color?: TextColorTheme
  onChange?: (value: string) => void
  value: string
}

export const TextArea: FC<TextAreaProps> = ({
  className = '',
  font = 'interRegularM',
  color = '',
  title,
  value,
  placeholder = 'Text-area',
  disabled = false,
  onChange,
  ...otherProps
}) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(e.target.value)
    }
  }

  return (
    <label className={classNames(cls.label, { [cls.disabled]: disabled }, [])}>
      {title}
      <textarea
        {...otherProps}
        onChange={onChangeHandler}
        disabled={disabled}
        placeholder={placeholder}
        value={value}
        className={classNames(cls.textArea, {}, [className])}
      ></textarea>
    </label>
  )
}
