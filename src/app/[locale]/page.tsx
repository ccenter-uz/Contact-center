import Header from '@/@core/components/Header'
import Footer from '@/@core/components/Footer'
import { Metadata } from 'next'
import Loading from './loading'
import Main from '@/@core/components/pages/main'
import { Suspense } from 'react'
import { getLocale } from 'next-intl/server'
import { getData } from '@/@core/components/pages/main/actions'
import { IGlobalDataType } from '@/@core/utils/type'

export const metadata: Metadata = {
  title: 'Home page'
}
export default async function Home() {
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
