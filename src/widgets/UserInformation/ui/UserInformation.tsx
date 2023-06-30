import React, { FC, memo } from 'react'

import useTranslation from 'next-translate/useTranslation'

import Bookmark from '../../../../public/icon/bookmark.svg'
import Statistic from '../../../../public/icon/trending-up.svg'

import cls from './UserInformation.module.scss'

import { PATH } from 'shared/const/path'
import { classNames } from 'shared/lib/classNames/classNames'
import { NavLink, NavLinkColor } from 'shared/ui/NavLink/Navlink'
import { Text, TextFontTheme } from 'shared/ui/Text/Text'

interface UserInformationProps {
  className?: string
}

const userInformationList = [
  { id: '1', title: 'statistics', Icon: Statistic, href: PATH.STATISTICS },
  { id: '2', title: 'favorites', Icon: Bookmark, href: PATH.FAVORITES },
]

export const UserInformation: FC<UserInformationProps> = memo(({ className = '' }) => {
  const { t } = useTranslation('sidebar')

  return (
    <ul className={classNames(cls.UserInformation, {}, [])}>
      {userInformationList.map(({ id, title, Icon, href }) => (
        <li key={id}>
          <NavLink href={href} color={NavLinkColor.PRIMARY} className={cls.navLink}>
            <Icon fill={'currentColor'} />
            <Text tag={'span'} font={TextFontTheme.INTER_MEDIUM_L} className={className}>
              {t(title)}
            </Text>
          </NavLink>
        </li>
      ))}
    </ul>
  )
})
