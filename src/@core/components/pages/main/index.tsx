'use client'
import { FC } from 'react'
import './style.scss'
import dynamic from 'next/dynamic'
import { IGlobalDataType } from '@/@core/utils/type'
import Loading from '@/app/[locale]/loading'

const Achievements = dynamic(() => import('../../Achievement').then(res => res.Achievements), {
  loading: () => <Loading />
})
const Services = dynamic(() => import('../../Services').then(res => res.Services), { loading: () => <Loading /> })
const OtherService = dynamic(() => import('../../OtherService').then(res => res.OtherService), {
  loading: () => <Loading />
})
const Community = dynamic(() => import('../../Community').then(res => res.Community), { loading: () => <Loading /> })
const JoinOurTeam = dynamic(() => import('../../JoinOutTeam').then(res => res.JoinOurTeam), {
  loading: () => <Loading />
})
const Partners = dynamic(() => import('../../Partners').then(res => res.Partners), { loading: () => <Loading /> })
const Comment = dynamic(() => import('../../Comment').then(res => res.Comment), { loading: () => <Loading /> })
const CarouselComp = dynamic(() => import('../../Carousel'), { loading: () => <Loading /> })

const Main: FC<IGlobalDataType> = ({ data }) => {
  return (
    <main className='main-page'>
      <CarouselComp data={data} />
      <Achievements data={data} />
      <Services />
      <OtherService data={data} />
      <Community data={data} />
      <JoinOurTeam />
      <Partners data={data} />
      <Comment data={data} />
    </main>
  )
}

export default Main
