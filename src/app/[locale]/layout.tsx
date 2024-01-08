import { NextIntlClientProvider, useMessages } from 'next-intl'
import { MainContext } from '@/@core/service/context/main'
import StyledComponentsRegistry from '@/lib/AntdRegistry'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'ccenter.uz',
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        href: '/favicon.svg'
      }
    ]
  },
  alternates: {
    canonical: `/`,
    languages: {
      'en-US': '/en',
      'uz-UZ': '/uz',
      'ru-RU': '/ru'
    }
  },
  description:
    'Контактный центр "АК Узбектелеком" предоставляет услуги по аутсорсингу, созданию виртуального офиса, анкетированию, автоматическому обзвону абонентов и множеству других услуг.',
  applicationName: 'ccenter',
  authors: [{ name: 'ccenter,Uztelecom AK' }],
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  creator: 'Contact center-Uztelecom AK',
  publisher: 'Contact center-Uztelecom AK',
  metadataBase: new URL('https://www.ccenter.uz')
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
