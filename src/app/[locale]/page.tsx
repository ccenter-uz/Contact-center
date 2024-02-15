import { Suspense } from 'react'
import Loading from './loading'
import Header from '@/@core/components/Header'
import dynamic from 'next/dynamic'
import { getLocale } from 'next-intl/server'
import { getData } from '@/@core/components/pages/main/actions'

const Main = dynamic(() => import('@/@core/components/pages/main'), { ssr: false, loading: () => <Loading /> })
const Footer = dynamic(() => import('@/@core/components/Footer'), { loading: () => <Loading /> })

export default async function App() {
  const locale = await getLocale()
  const data = await getData(locale)

  return (
    <main>
      <Header data={data} />
      <Suspense fallback={<Loading />}>
        <Main data={data} />
      </Suspense>
      <Footer />
    </main>
  )
}
