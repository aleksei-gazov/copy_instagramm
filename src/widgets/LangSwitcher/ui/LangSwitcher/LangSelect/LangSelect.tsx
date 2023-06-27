import { ChangeEvent, useState } from 'react'

import { Listbox } from '@headlessui/react'

import ArrowLight from '../../../../../../public/icon/arrow-ios-forward.svg'
import { useSelectKeyboardHandling } from '../../../../../shared/hooks/useSelectKeyboardHandling'
import { LangOption, LanguageType } from '../LangOption/LangOption'

import cls from './LangSelect.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

interface SelectProps {
  options: LanguageType[]
  value: string
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void
}

export const LangSelect = ({ options, value, onChange }: SelectProps) => {
  const [isActive, setIsActive] = useState(false)

  const { onKeyDownHandler, onMouseDown, onArrowDown } = useSelectKeyboardHandling({
    isActive,
    setIsActive,
  })

  console.log(options)

  return (
    <div className={cls.Select}>
      <Listbox
        value={value}
        // onChange={onChange}
      >
        <Listbox.Button
          onKeyDown={onArrowDown}
          onClick={() => setIsActive(prev => !prev)}
          className={classNames(cls.listBoxButton, { [cls.isActive]: isActive }, [])}
        >
          <LangOption key={value} language={value as LanguageType} />
          <ArrowLight
            className={classNames(cls.arrowIcon, { [cls.selected]: isActive }, [])}
            alt={'arrow icon'}
          />
        </Listbox.Button>
        <Listbox.Options
          onBlur={() => setIsActive(false)}
          onKeyDown={onKeyDownHandler}
          onMouseDown={onMouseDown}
          className={classNames(cls.listBoxOptions, { [cls.isActive]: isActive }, [])}
        >
          {options?.map((option: string, index) => (
            <Listbox.Option
              className={({ active }) =>
                active ? `${cls.listBoxOption} ${cls.listBoxOptionActive}` : cls.listBoxOption
              }
              key={index}
              value={option}
              // disabled={person.unavailable}
            >
              <LangOption key={option} language={option as LanguageType} />
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  )
}
