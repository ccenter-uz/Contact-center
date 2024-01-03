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
import { IGlobalDataType } from '@/@core/utils/type'

const Main: FC<IGlobalDataType> = async ({ data }) => {
  return (
    <main className='main-page'>
      <Suspense fallback={<Loading />}>
        <CarouselComp data={data} />
        <Achievements data={data} />
        <Services />
        <OtherService data={data} />
        <Community data={data} />
        <JoinOurTeam />
        <Partners data={data} />
        <Comment data={data} />
      </Suspense>
    </main>
  )
}

export default Main
