import React, { FC, useEffect, useRef, useState } from 'react'

import DatePicker, { ReactDatePickerProps } from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import cls from './DatePicker.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

export enum CustomDatePickerThemes {
  SINGLE_DATE = 'single',
  RANGE = 'range',
}

interface CustomDatePickerProps {
  start?: Date | null
  end?: Date | null
  onChangeDates?: (dates: [Date | null, Date | null]) => void
  onChangeDate?: (data: Date | null) => void
  theme?: CustomDatePickerThemes
  className?: string
}

export const CustomDatePicker: FC<CustomDatePickerProps> = ({
  onChangeDate,
  onChangeDates,
  end,
  start,
  theme = 'single',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  const onChange = (dates: Date | [Date | null, Date | null] | null) => {
    console.log(dates)
    if (Array.isArray(dates)) {
      onChangeDates?.(dates)
    } else {
      onChangeDate?.(dates)
    }
  }

  return (
    <div ref={ref}>
      <div className={cls.container} onClick={() => setIsOpen(prev => !prev)}>
        <DatePicker
          wrapperClassName={classNames(
            cls.wrapper,
            { [cls.single]: theme === CustomDatePickerThemes.SINGLE_DATE },
            []
          )}
          showIcon
          selectsRange={theme === CustomDatePickerThemes.RANGE}
          selected={start}
          startDate={start}
          endDate={end}
          onChange={() => {}}
          calendarClassName={cls.calendar}
        />
      </div>

      {isOpen && (
        <DatePicker
          dayClassName={date => cls.day}
          popperClassName={cls.popper}
          weekDayClassName={() => cls.weekDay}
          monthClassName={() => cls.month}
          selected={start}
          selectsRange={theme === CustomDatePickerThemes.RANGE}
          startDate={start}
          endDate={end}
          onChange={onChange}
          inline
        />
      )}
    </div>
  )
}
