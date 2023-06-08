import React, { FC, useEffect, useRef, useState } from 'react'

import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import cls from './DatePicker.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

// eslint-disable-next-line import/order
import { format, parse } from 'date-fns'

export enum CustomDatePickerThemes {
  SINGLE_DATE = 'single',
  RANGE = 'range',
}

interface CustomDatePickerProps {
  start?: string | null
  end?: string | null
  onChangeDates?: (dates: (string | null)[]) => void
  onChange?: (data: string | null) => void
  theme?: CustomDatePickerThemes
  className?: string
  title?: string
}

export const CustomDatePicker: FC<CustomDatePickerProps> = ({
  onChange,
  onChangeDates,
  end,
  start,
  theme = 'single',
  title,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const ref = useRef<HTMLDivElement>(null)

  const startDate = start ? parse(start, 'dd.MM.yyyy', new Date()) : null

  const endDate = end ? parse(end, 'dd.MM.yyyy', new Date()) : null

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

  const onChangeHandler = (dates: Date | [Date | null, Date | null] | null) => {
    if (!dates) return
    if (Array.isArray(dates)) {
      onChangeDates?.(dates.map(date => (date ? format(date, 'dd.MM.yyyy') : null)))
    } else {
      onChange?.(format(dates, 'dd.MM.yyyy'))
    }
  }

  return (
    <div ref={ref} className={cls.wrapper}>
      <div className={cls.container} onClick={() => setIsOpen(prev => !prev)}>
        <label className={cls.label}>
          {title}
          <DatePicker
            wrapperClassName={classNames(
              cls.wrapper,
              {
                [cls.single]: theme === CustomDatePickerThemes.SINGLE_DATE,
                [cls.singleOpen]: theme === CustomDatePickerThemes.SINGLE_DATE && isOpen,
              },
              []
            )}
            showIcon
            selectsRange={theme === CustomDatePickerThemes.RANGE}
            selected={startDate}
            startDate={startDate}
            endDate={endDate}
            onChange={onChangeHandler}
            calendarClassName={cls.calendar}
          />
        </label>
      </div>

      {isOpen && (
        <div className={cls.absolute}>
          <DatePicker
            dayClassName={date => cls.day}
            popperClassName={cls.popper}
            weekDayClassName={() => cls.weekDay}
            monthClassName={() => cls.month}
            selected={startDate}
            selectsRange={theme === CustomDatePickerThemes.RANGE}
            startDate={startDate}
            endDate={endDate}
            onChange={onChangeHandler}
            inline
          />
        </div>
      )}
    </div>
  )
}
