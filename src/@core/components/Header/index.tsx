import { FC } from 'react'
import './style.scss'
import Link from 'next/link'

const Header: FC = () => {
  return (
    <header className='d-flex align-center justify-between'>
      <h1>Header</h1>
      <ul className='d-flex align-center gap-x-3'>
        <li>
          <Link href={'/login'}>Login</Link>
        </li>
        <li>
          <Link href={'/dashboard'}>Dashboard</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
