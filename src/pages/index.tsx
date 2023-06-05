import React from 'react'

import { useRouter } from 'next/router'

import { PATH } from 'shared/const/path'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { getLayout } from 'widgets/Layout/Layout'

function Home() {
  const { push } = useRouter()

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <Button
        onClick={() => push(PATH.PROFILE_SETTING)}
        theme={ButtonTheme.LIGHT}
        size={ButtonSize.L}
      >
        Profile Settings
      </Button>
    </div>
  )
}

Home.getLayout = getLayout

export default Home
