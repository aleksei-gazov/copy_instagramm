import { memo, ReactNode } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'
import { TabsType } from 'shared/ui/Tabs/Tabs'
import cls from 'shared/ui/Tabs/Tabs.module.scss'

export type TabPropsType = {
  children: ReactNode
  value: TabsType
  currentValue: TabsType
  onClick: (value: TabsType) => void
}

export const Tab = memo(({ children, onClick, value, currentValue }: TabPropsType) => (
  <button
    className={classNames(cls.button, { [cls.buttonActive]: currentValue === value }, [])}
    onClick={() => onClick(value)}
  >
    {children}
  </button>
))
