import type { Metadata } from 'next'
import '@/@core/style/globalStyle.scss'
// style for toast
import 'react-toastify/dist/ReactToastify.min.css'
import StyledComponentsRegistry from '@/lib/AntdRegistry'
import { MainContext } from '@/@core/service/context/main'

export const metadata: Metadata = {
  title: 'Contact-center',
  description: 'This is basic web app for Contact center'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <MainContext>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </MainContext>
      </body>
    </html>
  )
}
