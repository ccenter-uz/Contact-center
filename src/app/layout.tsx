import type { Metadata } from 'next'
import '@/@core/style/globalStyle.css'
// style for toast
import 'react-toastify/dist/ReactToastify.min.css'

export const metadata: Metadata = {
  title: 'Contact-center',
  description: 'This is basic web app for Contact center'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
