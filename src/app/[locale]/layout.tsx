import { NextIntlClientProvider, useMessages } from 'next-intl'
import StyledComponentsRegistry from '@/lib/AntdRegistry'
import { Metadata } from 'next'
import { ToastContainer } from 'react-toastify'
import dynamic from 'next/dynamic'
import Loading from './loading'
import Header from '@/@core/components/Header'


const Footer = dynamic(() => import('@/@core/components/Footer'), { loading: () => <Loading /> })

export const metadata: Metadata = {
  title: 'Contact center – UZTELECOM',
  openGraph: {
    title: 'Contact center – UZTELECOM',
    type: 'website',
    description:
      'UZTELECOM предлагает услуги аутсорсинга, создания виртуального офиса, анкетирования, автоматического обзвона и др.',
    url: 'https://ccenter.uz/',
    images: '/favicon.ico'
  },
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        href: '/favicon.svg'
      }
    ]
  },

  alternates: {
    canonical: `https://ccenter.uz/`
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

const RootLayout = ({ children, params }: { children: React.ReactNode; params: any }) => {
  const messages = useMessages()

  return (
    <html lang={params.locale}>
      <body>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <StyledComponentsRegistry>
            <Header />
            {children}
            <Footer />
          </StyledComponentsRegistry>
        </NextIntlClientProvider>
        <ToastContainer />
      </body>
    </html>
  )
}

export default RootLayout
