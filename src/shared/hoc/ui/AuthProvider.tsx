import React, { FC, memo, ReactNode } from 'react'

import { useRouter } from 'next/router'

import { PATH } from 'shared/const/path'
import { useAuthQuery } from 'shared/hoc/service/authProvider'
import { Loader } from 'shared/ui/Loader/Loader'

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: FC<AuthProviderProps> = memo(({ children }) => {
  const router = useRouter()
  const { isLoading, error } = useAuthQuery()

  if (isLoading) return <Loader />
  if (error) {
    router.push(PATH.LOGIN)
  }

  return <>{children}</>
})
