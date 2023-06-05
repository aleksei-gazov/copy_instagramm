import React, { PropsWithChildren } from 'react'

import cls from './userProfileData.module.scss'

import { Text, TextColorTheme } from 'shared/ui/Text/Text'
import { TextArea } from 'shared/ui/TextArea/TextArea'

const userProfileDataList = [
  { id: '1', title: 'Username', item: '' },
  { id: '2', title: 'First Name', item: '' },
  { id: '3', title: 'Last Name', item: '' },
  { id: '4', title: 'Date of birthday', item: '' },
  { id: '5', title: 'City', item: '' },
  { id: '6', title: 'About Me', item: <TextArea>{'Text-area'}</TextArea> },
]

export const UserProfileData = ({ children }: PropsWithChildren) => {
  return (
    <div className={cls.userProfileData}>
      {userProfileDataList.map(({ id, title, item }) => (
        <div key={id} className={cls.item}>
          <Text tag={'span'} color={TextColorTheme.LIGHT}>
            {title}
          </Text>
          <Text tag={'h1'} color={TextColorTheme.LIGHT}>
            {item}
          </Text>
        </div>
      ))}
    </div>
  )
}
