import { FC } from 'react'
import './style.scss'
import { CarouselComp } from '../../Carousel'
import { Achievements } from '../../Achievement'
import { Services } from '../../Services'
import { OtherService } from '../../OtherService'
import { Community } from '../../Community'
import { JoinOurTeam } from '../../JoinOutTeam'
import { Partners } from '../../Partners'

const Main: FC = () => {
  return (
    <main className='main-page'>
      <CarouselComp />
      <Achievements />
      <Services />
      <OtherService />
      <Community />
      <JoinOurTeam />
      <Partners />
    </main>
  )
}

export default Main
