import dynamic from 'next/dynamic'
import { FC } from 'react'
import Loading from '../loading'
import { getLocale } from 'next-intl/server'
import { getData } from '@/@core/components/pages/main/actions'
import Header from '@/@core/components/Header'
import Footer from '@/@core/components/Footer'
import { Metadata } from 'next'

const Main = dynamic(() => import('@/@core/components/pages/main'), { ssr: false, loading: () => <Loading /> })

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
    canonical: `https://ccenter.uz/home`,
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
  metadataBase: new URL('https://ccenter.uz/home')
}

const Home: FC = async () => {
  const locale = await getLocale()
  const data = await getData(locale)

  return (
    <main>
      <Header data={data} />
      <Main data={data} />
      <Footer />
    </main>
  )
}

export default Home
