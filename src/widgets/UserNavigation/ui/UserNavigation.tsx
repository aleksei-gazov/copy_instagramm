import React, { FC, memo } from 'react'

import Home from '../../../../public/icon/home.svg'
import Person from '../../../../public/icon/person.svg'
import Plus from '../../../../public/icon/plus-square.svg'

import s from './UserNavigation.module.scss'

import { PATH } from 'shared/const/path'
import { classNames } from 'shared/lib/classNames/classNames'
import { NavLink, NavLinkColor } from 'shared/ui/NavLink/Navlink'
import cls from 'widgets/UserInformation/ui/UserInformation.module.scss'

const userInformationList = [
  { id: '1', title: 'Home', Icon: Home, href: PATH.HOME },
  { id: '2', title: 'Create', Icon: Plus, href: '#' },
  { id: '3', title: 'My Profile', Icon: Person, href: PATH.PROFILE },
]

interface UserNavigationProps {
  className?: string
}

export const UserNavigation: FC<UserNavigationProps> = memo(({ className = '' }) => {
  return (
    <ul className={classNames(cls.UserInformation, {}, [className, s.UserNavigation])}>
      {userInformationList.map(({ id, title, Icon, href }) => (
        <li key={id}>
          <NavLink href={href} color={NavLinkColor.PRIMARY} className={cls.navLink}>
            <Icon fill={'currentColor'} />
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  )
})
