import React, { useState } from 'react'

import { CheckBox } from 'shared/ui/Checkbox/Checkbox'
import { getLayout } from 'widgets/Layout/Layout'

function Home() {
  const [isChecked, setChecked] = useState(false)

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <CheckBox
        label={'Check-box'}
        isChecked={isChecked}
        onChangeChecked={setChecked}
        width={'18px'}
        height={'18px'}
      />
    </div>
  )
}

Home.getLayout = getLayout

export default Home
