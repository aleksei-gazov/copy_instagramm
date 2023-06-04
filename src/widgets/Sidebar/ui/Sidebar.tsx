import cls from './Sidebar.module.scss'

import { LogOutComponent } from 'features/auth/logOut/ui/LogOutComponent'
import { UserInformation } from 'widgets/UserInformation/ui/UserInformation'

export const Sidebar = () => {
  return (
    <aside className={cls.Sidebar}>
      <div>1</div>
      <UserInformation />
      <LogOutComponent />
    </aside>
  )
}
