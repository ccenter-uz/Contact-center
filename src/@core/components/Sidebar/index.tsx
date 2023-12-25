import { FC } from 'react'
import './style.scss'
import { Menu } from 'react-feather'

export const SideBar: FC = () => {
  return (
    <div className='menu-burger'>
      <Menu color='grey' />
    </div>
  )
}
