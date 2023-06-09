import { useState } from 'react'

import { Listbox } from '@headlessui/react'

import ArrowLight from '../../../../public/icon/arrow-ios-forward.svg'
import { useSelectKeyboardHandling } from '../../hooks/useSelectKeyboardHandling'

import cls from './Select.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

const people = [
  { id: 1, name: 'Durward Reynolds', unavailable: false },
  { id: 2, name: 'Kenton Towne', unavailable: false },
  { id: 3, name: 'Therese Wunsch', unavailable: false },
  { id: 5, name: 'Katelyn Rohan', unavailable: false },
]

// interface SelectProps {
//   options?: string[]
//   value?: string
//   onChange?: (value: string) => void
// }

export const Select = () => {
  const [selectedPerson, setSelectedPerson] = useState(people[0])
  const [isActive, setIsActive] = useState(false)

  const { onKeyDownHandler, onMouseDown, onArrowDown } = useSelectKeyboardHandling({
    isActive,
    setIsActive,
  })

  return (
    <div className={cls.Select}>
      <Listbox value={people[0]} onChange={setSelectedPerson}>
        <Listbox.Button
          onKeyDown={onArrowDown}
          onClick={() => setIsActive(prev => !prev)}
          className={classNames(cls.listBoxButton, { [cls.isActive]: isActive }, [])}
        >
          {selectedPerson.name}
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
          {people.map(person => (
            <Listbox.Option
              className={({ active }) =>
                active ? `${cls.listBoxOption} ${cls.listBoxOptionActive}` : cls.listBoxOption
              }
              key={person.id}
              value={person}
              disabled={person.unavailable}
            >
              {person.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  )
}
