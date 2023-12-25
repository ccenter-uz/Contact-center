import { FC, ReactNode } from 'react'
import './style.scss'

type IButton = {
  children: ReactNode
  onclick?: () => void
  form?: string
}

export const Button: FC<IButton> = ({ children, onclick, form }) => {
  return (
    <button form={form} onClick={onclick} className='btn-reusable'>
      {children}
    </button>
  )
}
