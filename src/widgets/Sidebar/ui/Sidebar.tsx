import cls from './Sidebar.module.scss'

import { LogOutComponent } from 'features/auth/logOut/ui/LogOutComponent'
import { UserInformation } from 'widgets/UserInformation/ui/UserInformation'
import { UserNavigation } from 'widgets/UserNavigation'

export const Sidebar = () => {
  return (
    <aside className={cls.Sidebar}>
      <UserNavigation />
      <UserInformation />
      <LogOutComponent className={cls.alignSelf} />
    </aside>
  )
}
