import { FC, ReactNode } from 'react'
import './style.scss'

type IButton = {
  children: ReactNode
  onclick?: () => void
}

export const Button: FC<IButton> = ({ children, onclick }) => {
  return (
    <button onClick={onclick} className='btn-reusable'>
      {children}
    </button>
  )
}
