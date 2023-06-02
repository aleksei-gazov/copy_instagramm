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
  const { isLoading, error } = useAuthQuery(undefined, { skip: Boolean(authMeData) })

  const isAuthPage = authMeData || asPath.startsWith(PATH.AUTH)

  if (error && !isAuthPage) {
    push(PATH.LOGIN)
  }

  if (isLoading) return <Loader />

  return <>{children}</>
})
