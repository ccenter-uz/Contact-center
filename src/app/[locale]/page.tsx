import Header from '@/@core/components/Header'
import Footer from '@/@core/components/Footer'
import Loading from './loading'
import { getLocale } from 'next-intl/server'
import { getData } from '@/@core/components/pages/main/actions'
import dynamic from 'next/dynamic'

const Main = dynamic(() => import('@/@core/components/pages/main'), { ssr: false, loading: () => <Loading /> })

export default async function Home() {
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
