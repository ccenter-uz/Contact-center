import { FC } from 'react'
import './style.scss'
import { CarouselComp } from '../../Carousel'
import { Achievements } from '../../Achievement'
import { Services } from '../../Services'
import { OtherService } from '../../OtherService'

const Main: FC = () => {
  return (
    <main className='main-page'>
      <CarouselComp />
      <Achievements />
      <Services />
      <OtherService />
    </main>
  )
}

export default Main
