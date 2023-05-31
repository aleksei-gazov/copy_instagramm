import React, { FC, memo, ReactNode } from 'react'

import { useRouter } from 'next/router'

import { PATH } from 'shared/const/path'
import { useAuthQuery } from 'shared/hoc/service/authProvider'
import { Loader } from 'shared/ui/Loader/Loader'

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: FC<AuthProviderProps> = memo(({ children }) => {
  const { push, asPath } = useRouter()
  const { isLoading, error } = useAuthQuery()

  // const isAuthPage = asPath === PATH.LOGIN || asPath === PATH.REGISTRATION

  if (isLoading) return <Loader />
  if (error && asPath === PATH.HOME) {
    push(PATH.LOGIN)
  }

  return <>{children}</>
})
