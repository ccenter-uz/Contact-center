import { FC, Suspense } from 'react'
import './style.scss'
import CarouselComp from '../../Carousel'
import { Achievements } from '../../Achievement'
import { Services } from '../../Services'
import { OtherService } from '../../OtherService'
import { Community } from '../../Community'
import { JoinOurTeam } from '../../JoinOutTeam'
import { Partners } from '../../Partners'
import Loading from '@/app/[locale]/loading'
import { Comment } from '../../Comment'
import { getData } from './actions'

const Main: FC = async () => {
  const data = await getData()

  console.log(data, 'data')

  return (
    <main className='main-page'>
      <CarouselComp />
      <Suspense fallback={<Loading />}>
        <Achievements />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Services />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <OtherService />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <Community />
      </Suspense>
      <JoinOurTeam />
      <Partners />
      <Suspense fallback={<Loading />}>
        <Comment />
      </Suspense>
    </main>
  )
}

export default Main
