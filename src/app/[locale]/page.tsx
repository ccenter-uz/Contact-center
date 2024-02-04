import { Suspense } from 'react'
import Loading from './loading'
import Home from './home/page'

export default async function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Home />
    </Suspense>
  )
}
