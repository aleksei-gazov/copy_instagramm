import React from 'react'

import { useRouter } from 'next/router'

import { PATH } from 'shared/const/path'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { getLayout } from 'widgets/Layout/Layout'

function Home() {
  const { push } = useRouter()

  return (
    <Button
      onClick={() => push(PATH.PROFILE_SETTING)}
      theme={ButtonTheme.LIGHT}
      size={ButtonSize.L}
    >
      Profile Settings
    </Button>
  )
}

Home.getLayout = getLayout

export default Home
