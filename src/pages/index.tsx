import React from 'react'

import { useRouter } from 'next/router'

import { getLayout } from 'widgets/Layout/Layout'

function Home() {
  const { push } = useRouter()

  return <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>Home</div>
}

Home.getLayout = getLayout

export default Home
