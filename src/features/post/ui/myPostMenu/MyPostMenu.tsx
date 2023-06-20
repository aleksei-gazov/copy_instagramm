import React, { useState } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { DeletePostComponent } from 'features/post/deletePost/ui/DeletePostComponent'
import cls from 'features/post/ui/myPostMenu/MyPostMenu.module.scss'

interface MyPostMenuProps {
  callback?: () => void
}

export const MyPostMenu = ({ callback }: MyPostMenuProps) => {
  const [act, setAct] = useState(false)
  const onActiveClass = () => {
    setAct(!act)
  }

  return (
    <div className={cls.menu}>
      <DropdownMenu.Root modal={false} onOpenChange={onActiveClass}>
        <DropdownMenu.Trigger asChild>
          <button className={act ? cls.buttonAct : cls.button}>...</button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content className={cls.content}>
          <DeletePostComponent callback={callback} />
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  )
}
