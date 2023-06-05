import React, { FC, InputHTMLAttributes } from 'react'

import { TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'
import cls from 'shared/ui/TextArea/TextArea.module.scss'

type HTMLTextAreaProps = Omit<InputHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange'>

interface TextAreaProps extends HTMLTextAreaProps {
  className?: string
  font?: TextFontTheme
  color?: TextColorTheme
  onChange?: (value: string) => void
  value?: string
}

export const TextArea: FC<TextAreaProps> = ({
  className = '',
  font = 'interRegularM',
  color = '',
  title,
  ...otherProps
}) => {
  return (
    <label className={cls.label}>
      {title}
      <textarea className={cls.textArea}></textarea>
    </label>
  )
}
