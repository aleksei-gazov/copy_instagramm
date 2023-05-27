import * as path from 'path'

import React, { FC, memo } from 'react'

import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

import cls from './NavLink.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

interface NavLinkProps extends LinkProps {
  className?: string
  text: string
}

export const NavLink: FC<NavLinkProps> = memo(({ href, className = '', text, ...otherProps }) => {
  const { pathname } = useRouter()

  const mods = {
    [cls.isActive]: href === pathname,
  }

  return (
    <Link {...otherProps} className={classNames(cls.NavLink, mods, [className])} href={href}>
      {text}
    </Link>
  )
})
