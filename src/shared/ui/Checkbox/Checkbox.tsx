import React, { ChangeEvent, FC, memo, useState } from 'react'

import Image from 'next/image'

import cls from './Checkbox.module.scss'

import check from '../../../../public/icon/checkbox-check-black.svg'
import disabledCheckbox from '../../../../public/icon/checkbox-check-disabled.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import { log } from 'console'

interface CheckBoxProps {
  className?: string
  label?: string
  width: string
  height: string
  value: boolean
  onChangeChecked: (value: boolean) => void
  disabled: boolean
}

export const CheckBox: FC<CheckBoxProps> = memo(
  ({ className = '', label, width, height, value, onChangeChecked, disabled }) => {
   
    const onClickHandler = () => {
      if(!disabled) {
        onChangeChecked(!value)
      }
      
    }
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChangeChecked(e.currentTarget.checked)
    }

    console.log(value)

    return (
      <div className={cls.container}>
        <div
          tabIndex={0}
          onClick={onClickHandler}
          style={{ width: width, height: height }}
          className={classNames(cls.CheckBox, {[cls.isDisabled]: disabled, [cls.isChecked]: value}, [className])}
        >
          <div className={classNames(cls.decoration, {}, [])}></div>
          {value && !disabled && <Image src={check} alt={'check'} width={14} height={14} />}
          {disabled && value && <Image src={disabledCheckbox} alt={'disabled'} width={14} height={14} />}
        </div>
        <label className={cls.label}>
          {label}

          <input
            checked={value}
            onChange={onChange}
            className={cls.input}
            id={'check'}
            type="checkbox"
            disabled={disabled}
          />
        </label>
      </div>
    )
  }
)