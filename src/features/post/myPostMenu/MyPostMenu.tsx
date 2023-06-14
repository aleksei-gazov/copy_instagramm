import { Menu } from '@headlessui/react'

import { DeletePostComponent } from '../deletePost/ui/DeletePostComponent'

import cls from './MyPostMenu.module.scss'

export const MyPostMenu = () => {
  return (
    <div className={cls.menu}>
      <Menu>
        <div>
          <Menu.Button>...</Menu.Button>
        </div>
        <Menu.Items>
          <div>
            <Menu.Item as={DeletePostComponent}></Menu.Item>
            {/*заменить на Edit Post*/}
          </div>
          <div>
            <Menu.Item as={DeletePostComponent}></Menu.Item>
          </div>
        </Menu.Items>
      </Menu>
    </div>
  )
}
