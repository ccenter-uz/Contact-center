import dynamic from 'next/dynamic'
import { FC } from 'react'
import { getLocale } from 'next-intl/server'
import { getData } from '@/@core/components/pages/main/actions'
import { Metadata } from 'next'
import Loading from '../loading'

const Header = dynamic(() => import('@/@core/components/Header'))
const Footer = dynamic(() => import('@/@core/components/Footer'))
const Main = dynamic(() => import('@/@core/components/pages/main'), { loading: () => <Loading /> })

export const metadata: Metadata = {
  title: 'Contact center – UZTELECOM',
  icons: {
    apple: {
      url: '/favicon.svg',
      href: '/favicon.svg'
    },
    icon: [
      {
        url: '/favicon.svg',
        href: '/favicon.svg'
      }
    ]
  },
  openGraph: {
    title: 'Contact center – UZTELECOM',
    type: 'website',
    description:
      'UZTELECOM предлагает услуги аутсорсинга, создания виртуального офиса, анкетирования, автоматического обзвона и др.',
    url: 'https://ccenter.uz/home',
    images: '/favicon.ico'
  },
  alternates: {
    canonical: `https://ccenter.uz/home`
  },
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
