import React, { FC, memo, ReactNode } from 'react'

import { useRouter } from 'next/router'

import { getIsLoading, Loader } from 'entities/globalLoader'
import { getAuthMeData } from 'features/auth/authMe/model/selectors/getAuthMeData/getAuthMeData'
import { useAuthQuery } from 'features/auth/authMe/service/authProvider'
import { PATH } from 'shared/const/path'
import { useAppSelector } from 'shared/hooks/useAppSelector'

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: FC<AuthProviderProps> = memo(({ children }) => {
  const { push, asPath } = useRouter()
  const authMeData = useAppSelector(getAuthMeData)?.email
  const isLoading = useAppSelector(getIsLoading)
  const skipAuthMe =
    Boolean(authMeData) || asPath.startsWith(PATH.AUTH) || asPath === PATH.ERROR_PAGE
  const { error } = useAuthQuery(undefined, {
    skip: skipAuthMe,
  })

  const isAuthPage = authMeData || asPath.startsWith(PATH.AUTH)

  if (error) {
    if ('status' in error && error.status === 401 && !isAuthPage) {
      push(PATH.LOGIN)

      return <></>
    } else {
      push(PATH.ERROR_PAGE)

      return <></>
    }
  }

  if (isLoading) return <Loader />

  return <>{children}</>
})
