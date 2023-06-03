import React, { useState } from 'react'

import { getLayout } from 'widgets/Layout/Layout'

import { CheckBox } from 'shared/ui/Checkbox/Checkbox'

function Home() {
  const [isChecked, setChecked] = useState(false)

  return (
    <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
        <CheckBox disabled={true} value={isChecked} onChangeChecked={setChecked} width={'18px'} height={'18px'} />
    </div>
  )
  
}

Home.getLayout = getLayout

export default Home
