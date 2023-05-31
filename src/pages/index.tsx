import React from 'react'

import { useRouter } from 'next/router'

import { PATH } from 'shared/const/path'
import { useAuthQuery } from 'shared/hoc/service/authProvider'
import { Loader } from 'shared/ui/Loader/Loader'
import { getLayout } from 'widgets/Layout/Layout'

function Home() {
  const { push } = useRouter()
  const { isLoading, error } = useAuthQuery()

  if (isLoading) return <Loader />
  if (error) {
    push(PATH.LOGIN)
  }

  return <div>home</div>
}

Home.getLayout = getLayout

export default Home
