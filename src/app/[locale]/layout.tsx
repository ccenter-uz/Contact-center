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
  title: 'CCenter.uz',
  description: 'This is basic web app for Contact center',
  applicationName: 'CCenter',
  authors: [{ name: 'CCenter,Uztelecom AK' }],
  generator: 'Next.js',
  keywords: [
    'ccenter',
    'contact center',
    'center',
    'contact',
    'kontakt',
    'kontakt sentr',
    'uztelecom',
    'uzonline',
    'контакт',
    'центр',
    'call center',
    'call markazi',
    'aloqa markazi',
    'aloqa',
    'call'
  ],
  referrer: 'origin-when-cross-origin',
  creator: 'Contact center-Uztelecom AK',
  publisher: 'Contact center-Uztelecom AK',
  metadataBase: new URL('https://www.ccenter.uz/')
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
