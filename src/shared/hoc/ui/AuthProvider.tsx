import React, { FC, memo, ReactNode } from 'react'

import { useRouter } from 'next/router'

import { PATH } from 'shared/const/path'
import { getAuthMeData } from 'shared/hoc/model/selectors/getAuthMeData/getAuthMeData'
import { useAuthQuery } from 'shared/hoc/service/authProvider'
import { useAppSelector } from 'shared/hooks/useAppSelector'
import { Loader } from 'shared/ui/Loader/Loader'

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: FC<AuthProviderProps> = memo(({ children }) => {
  const { push, asPath } = useRouter()
  const authMeData = useAppSelector(getAuthMeData)?.email
  const { isLoading, error } = useAuthQuery(undefined, {
    skip: Boolean(authMeData) || asPath.startsWith(PATH.AUTH),
  })

  const isAuthPage = authMeData || asPath.startsWith(PATH.AUTH)

  console.log(error)

  if (error) {
    if ('status' in error && error.status === 401 && !isAuthPage) {
      push(PATH.LOGIN)

      return <></>
    } else {
      push(PATH.ERROR_PAGE)

      return <></>
    }
  }

  // if (error && error.status && !isAuthPage) {
  //   push(PATH.LOGIN)
  //
  //   return <></>
  // }

  if (isLoading) return <Loader />

  return <>{children}</>
})
