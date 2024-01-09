'use client'
import { FC, useEffect, useState } from 'react'
import './style.scss'
import dynamic from 'next/dynamic'
import { IGlobalDataType } from '@/@core/utils/type'
import Loading from '@/app/[locale]/loading'
import { FloatButton } from 'antd'
import { ArrowUp } from 'react-feather'

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
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down 545px
      const scrolledDown = window.scrollY > 545
      setIsVisible(scrolledDown)
    }

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
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
      <div className={`float-button ${isVisible ? 'visible' : 'hidden'}`}>
        <div className='floatBtnAnimate'></div>
        <FloatButton
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className='d-flex align-center justify-center'
          icon={<ArrowUp style={{ color: '#fff', fontSize: '28px', textAlign: 'center' }} />}
        />
      </div>
    </main>
  )
}

export default Main
