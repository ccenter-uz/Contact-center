import Header from '@/@core/components/Header'
import Footer from '@/@core/components/Footer'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Loading from './loading'

const Main = dynamic(() => import('@/@core/components/pages/main'), { ssr: false, loading: () => <Loading /> })

export const metadata: Metadata = {
  title: 'Home page'
}
export default function Home() {
  return (
    <main>
      <Header />
      <Main />
      <Footer />
    </main>
  )
}
