import React, { MutableRefObject, useRef } from 'react'

import cls from './UserProfile.module.scss'
import { UserProfileContent } from './UserProfileContent/UserProfileContent'
import { UserProfileHeader } from './UserProfileHeader/UserProfileHeader'

import { useInfiniteScroll } from 'shared/hooks/useInfiniteScroll'

export const UserProfile = () => {
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>

  useInfiniteScroll({
    triggerRef,
    wrapperRef,
  })

  return (
    <div className={cls.container} ref={wrapperRef}>
      <div className={cls.innerWrapper}>
        <UserProfileHeader />
        <UserProfileContent />
      </div>
      <div ref={triggerRef} />
    </div>
  )
}
