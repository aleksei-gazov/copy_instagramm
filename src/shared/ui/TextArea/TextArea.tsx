import React, { FC, ReactNode } from 'react'

import { TextColorTheme, TextFontTheme } from 'shared/ui/Text/Text'
import cls from 'shared/ui/TextArea/TextArea.module.scss'

interface TextAreaProps {
  children: ReactNode
  className?: string
  font?: TextFontTheme
  color?: TextColorTheme
}

export const TextArea: FC<TextAreaProps> = ({
  children,
  className = '',
  font = 'interRegularM',
  color = '',
}) => {
  return (
    <div>
      <textarea className={cls.textArea}>{children}</textarea>
    </div>
  )
}
