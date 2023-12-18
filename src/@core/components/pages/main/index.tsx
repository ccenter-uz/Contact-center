import { FC } from 'react'
import './style.scss'
import { CarouselComp } from '../../Carousel'
import { Achievements } from '../../Achievement'

const Main: FC = () => {
  return (
    <main className='main-page'>
      <CarouselComp />
      <Achievements />
    </main>
  )
}

export default Main
