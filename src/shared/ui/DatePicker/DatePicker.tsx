import React, { FC, useEffect, useRef, useState } from 'react'

import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import cls from './DatePicker.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

// eslint-disable-next-line import/order
import { format, formatISO } from 'date-fns'

export enum CustomDatePickerThemes {
  SINGLE_DATE = 'single',
  RANGE = 'range',
}

interface CustomDatePickerProps {
  start?: string | null
  end?: string | null
  onChangeDates?: (dates: (string | null)[]) => void
  onChangeDate?: (data: string | null) => void
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

  const startDate = start ? new Date(start) : null
  const endDate = end ? new Date(end) : null

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
    if (!dates) return
    if (Array.isArray(dates)) {
      onChangeDates?.(
        dates.map(date => (date ? formatISO(date, { representation: 'complete' }) : null))
      )
    } else {
      onChangeDate?.(formatISO(dates, { representation: 'complete' }))
    }
  }

  return (
    <div ref={ref}>
      <div className={cls.container} onClick={() => setIsOpen(prev => !prev)}>
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
          selected={startDate}
          selectsRange={theme === CustomDatePickerThemes.RANGE}
          startDate={startDate}
          endDate={endDate}
          onChange={onChange}
          inline
        />
      )}
    </div>
  )
}
