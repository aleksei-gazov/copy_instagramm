import { Fragment } from 'react'

import { Menu, Transition } from '@headlessui/react'

import { DeletePostComponent } from '../deletePost/ui/DeletePostComponent'

import cls from './MyPostMenu.module.scss'

export const MyPostMenu = () => {
  return (
    <div className={cls.menu}>
      <Menu>
        <Menu.Button>More</Menu.Button>
        <Menu.Items>
          <Menu.Item>
            {({ active }) => (
              <a className={`${active && 'bg-blue-500'}`} href="/post/deletePost">
                <DeletePostComponent />
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a className={`${active && 'bg-blue-500'}`} href="/account-settings">
                Documentation
              </a>
            )}
          </Menu.Item>
          <Menu.Item disabled>
            <span className="opacity-75">Invite a friend (coming soon!)</span>
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </div>
  )
}
