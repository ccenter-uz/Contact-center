import LoginPage from '@/@core/components/pages/login'
import { Metadata } from 'next'
import { FC } from 'react'

export const metadata: Metadata = {
  title: 'Login page'
}

const Login: FC = () => <LoginPage />

export default Login
