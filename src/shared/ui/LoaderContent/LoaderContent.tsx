import { FC, memo } from 'react'

import cls from './LoaderContent.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

interface LoaderProps {
  className?: string
}

export const LoaderContent: FC<LoaderProps> = memo(({ className = '' }) => {
  return (
    <div className={classNames(cls.Loader, {}, [className])}>
      <span className={cls.loader}></span>
      <span className={cls.text}>Loading...</span>
    </div>
  )
})
