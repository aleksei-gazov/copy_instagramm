import React, { FC, memo } from 'react'

import Bookmark from '../../../../public/icon/bookmark.svg'
import Statistic from '../../../../public/icon/trending-up.svg'

import cls from './UserInformation.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

interface UserInformationProps {
  className?: string
}

const userInformationList = [
  { id: '1', title: 'Statistics', Icon: Statistic },
  { id: '2', title: 'Favorites', Icon: Bookmark },
]

export const UserInformation: FC<UserInformationProps> = memo(({ className = '' }) => {
  return (
    <ul className={classNames(cls.UserInformation, {}, [className])}>
      {userInformationList.map(({ id, title, Icon }) => (
        <li key={id}>
          <div>
            <Icon fill={'var(--light-100)'} />
            {title}
          </div>
        </li>
      ))}
    </ul>
  )
})
