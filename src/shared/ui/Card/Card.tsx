import { FC, memo } from 'react'

import Image, { ImageProps } from 'next/image'

import cls from './Card.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

interface CardProps extends ImageProps {
  className?: string
}

export const Card: FC<CardProps> = memo(({ className = '', ...arg }) => {
  return (
    <div className={classNames(cls.Card, {}, [className])}>
      <Image {...arg} />
    </div>
  )
})
