import React from 'react'

import cls from './userProfileNavigate.module.scss'

import { NavLink, NavLinkColor } from 'shared/ui/NavLink/Navlink'

export const UserProfileNavigate = () => {
  return (
    <div className={cls.Navigate}>
      <NavLink href={'#'} color={NavLinkColor.SECONDARY} className={cls.navLink}>
        General information
      </NavLink>
      <NavLink href={'#'} color={NavLinkColor.SECONDARY} className={cls.navLink}>
        Devices
      </NavLink>
      <NavLink href={'#'} color={NavLinkColor.SECONDARY} className={cls.navLink}>
        Account Management
      </NavLink>
      <NavLink href={'#'} color={NavLinkColor.SECONDARY} className={cls.navLink}>
        My payments
      </NavLink>
    </div>
  )
}
