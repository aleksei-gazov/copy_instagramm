import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC, memo } from 'react'

import cls from './Button.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

export enum ButtonTheme {
  Clear = 'clear',
  PRIMARY = 'primary',
  OUTLINE = 'outline',
}

export enum ButtonSize {
  XXl = 'xxl',
  Xl = 'xl',
  L = 'l',
  M = 'm',
  S = 's',
  XS = 'xs',
}

interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  theme: ButtonTheme
  size?: ButtonSize
}
export const Button: FC<ButtonProps> = memo(
  ({
    theme = 'medium',
    children,
    className = '',
    size = '',
    type = 'button',
    disabled = false,
    ...otherProps
  }) => {
    return (
      <button
        {...otherProps}
        type={type}
        disabled={disabled}
        className={classNames(cls.Button, {}, [className, cls[theme], cls[size]])}
      >
        {children}
      </button>
    )
  }
)
