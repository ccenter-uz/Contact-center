'use client'
import { FC, useEffect, useLayoutEffect, useState } from 'react'
import './style.scss'
import dynamic from 'next/dynamic'
import { IGlobalDataType } from '@/@core/utils/type'
import Loading from '@/app/[locale]/loading'
import { FloatButton } from 'antd'
import { ArrowUp } from 'react-feather'
import CarouselComp from './components/Carousel'

const Achievements = dynamic(() => import('./components/Achievement').then(res => res.Achievements), {
  loading: () => <Loading />
})
const Services = dynamic(() => import('./components/Services').then(res => res.Services), { loading: () => <Loading /> })
const OtherService = dynamic(() => import('./components/OtherService').then(res => res.OtherService), {
  loading: () => <Loading />
})
const Community = dynamic(() => import('./components/Community').then(res => res.Community), { loading: () => <Loading /> })
const JoinOurTeam = dynamic(() => import('./components/JoinOutTeam').then(res => res.JoinOurTeam))
const Partners = dynamic(() => import('./components/Partners').then(res => res.Partners), { loading: () => <Loading /> })
const Comment = dynamic(() => import('./components/Comment').then(res => res.Comment), { loading: () => <Loading /> })

const Main: FC<IGlobalDataType> = ({ data }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useLayoutEffect(() => {
    const handleScroll = () => {
      const scrolledDown = window.scrollY > 545
      setIsVisible(scrolledDown)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

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
      <div role='button' aria-label='to-top' className={`float-button ${isVisible ? 'visible' : 'hidden'}`}>
        <div className='floatBtnAnimate'></div>
        <FloatButton
          aria-label='button-float'
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className='d-flex align-center justify-center'
          icon={<ArrowUp style={{ color: '#fff', fontSize: '28px', textAlign: 'center' }} />}
        />
      </div>
    </main>
  )
}

export default Main
