import { NextIntlClientProvider, useMessages } from 'next-intl'
import { MainContext } from '@/@core/service/context/main'
import StyledComponentsRegistry from '@/lib/AntdRegistry'
import { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { ToastContainer } from 'react-toastify'

// If loading a variable font, you don't need to specify the font weight
const inter = Montserrat({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Contact center – UZTELECOM',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        href: '/favicon.ico'
      }
    ]
  },

  alternates: {
    canonical: `https://ccenter.uz/`,
    languages: {
      'en-US': '/en',
      'uz-UZ': '/uz',
      'ru-RU': '/ru'
    }
  },
  description:
    'UZTELECOM предлагает услуги аутсорсинга, создания виртуального офиса, анкетирования, автоматического обзвона и др.',
  applicationName: 'ccenter',
  authors: [{ name: 'ccenter,Uztelecom AK' }],
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  creator: 'Contact center-Uztelecom AK',
  publisher: 'Contact center-Uztelecom AK',
  metadataBase: new URL('https://ccenter.uz')
}

const RootLayout = ({ children, params: { locale } }: { children: React.ReactNode; params: any }) => {
  const messages = useMessages()

  return (
    <html lang={locale} className={inter.className}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <MainContext>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </MainContext>
        </NextIntlClientProvider>
        <ToastContainer />
      </body>
    </html>
  )
}

export default RootLayout
