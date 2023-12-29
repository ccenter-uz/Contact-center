import { FC, ReactNode } from 'react'
import './style.scss'

type IButton = {
  children: ReactNode
  onclick?: () => void
  form?: string
  disabled?: boolean
}

export const Button: FC<IButton> = ({ children, onclick, form, disabled }) => {
  return (
    <button disabled={disabled} form={form} onClick={onclick} className='btn-reusable'>
      {children}
    </button>
  )
}
