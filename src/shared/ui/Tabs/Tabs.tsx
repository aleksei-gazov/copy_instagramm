import { useState } from 'react'

import cls from './Tabs.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

type TabsType = 'tab-1' | 'tab-2' | 'tab-3' | 'tab-4'

export const Tabs = () => {
  const [currentTab, setCurrentTab] = useState<TabsType>('tab-1')

  const handlerClickTab = (tab: TabsType) => setCurrentTab(tab)

  return (
    <div className={cls.tabs}>
      <div className={cls.buttonGroup}>
        <button
          className={classNames(cls.button, { [cls.buttonActive]: currentTab === 'tab-1' }, [])}
          onClick={() => handlerClickTab('tab-1')}
        >
          General information
        </button>
        <button
          className={classNames(cls.button, { [cls.buttonActive]: currentTab === 'tab-2' }, [])}
          onClick={() => handlerClickTab('tab-2')}
        >
          Devices
        </button>
        <button
          className={classNames(cls.button, { [cls.buttonActive]: currentTab === 'tab-3' }, [])}
          onClick={() => handlerClickTab('tab-3')}
        >
          Account Management
        </button>
        <button
          className={classNames(cls.button, { [cls.buttonActive]: currentTab === 'tab-4' }, [])}
          onClick={() => handlerClickTab('tab-4')}
        >
          My payments
        </button>
      </div>

      <div className={classNames(cls.content, { [cls.activeContent]: currentTab === 'tab-1' }, [])}>
        {/*Content for General information*/}
        <p>CONTENT-1</p>
      </div>

      <div className={classNames(cls.content, { [cls.activeContent]: currentTab === 'tab-2' }, [])}>
        {/*Content for Devices*/}
        <p>CONTENT-2</p>
      </div>

      <div className={classNames(cls.content, { [cls.activeContent]: currentTab === 'tab-3' }, [])}>
        {/*Content for Account Management*/}
        <p>CONTENT-3</p>
      </div>
      <div className={classNames(cls.content, { [cls.activeContent]: currentTab === 'tab-4' }, [])}>
        {/*Content for My payments*/}
        <p>CONTENT-4</p>
      </div>
    </div>
  )
}
