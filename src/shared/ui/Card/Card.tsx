import { FC, memo } from 'react'

import Image from 'next/image'

import cls from './Card.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

interface CardProps {
  className?: string
  id: number
  src: string
  alt: string
  callBack: (value: number) => void
}

export const Card: FC<CardProps> = memo(({ className = '', id, src, alt, callBack }) => {
  const onClickHandler = () => {
    callBack(id)
  }

  return (
    <div onClick={onClickHandler} className={classNames(cls.Card, {}, [className])}>
      <div className={cls.container}>
        <Image
          sizes="(max-width: 298px) 100vw, 50vw"
          priority={true}
          src={src}
          alt={alt}
          fill
          className={cls.cardItem}
        />
      </div>
    </div>
  )
})
