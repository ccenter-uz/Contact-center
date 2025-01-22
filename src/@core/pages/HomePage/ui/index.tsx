'use client'
import { FC, useLayoutEffect, useState } from 'react'
import './style.scss'
import dynamic from 'next/dynamic'
import { IGlobalDataType } from '@/@core/shared/type'
import Loading from '@/app/[locale]/loading'
import { FloatButton } from 'antd'
import { ArrowUp, MessageCircle } from 'react-feather'
import CarouselComp from './Carousel'
import { useLang } from '@/@core/apps/hooks/useLang'

const ParentStory = dynamic(() => import('@/@core/features/NavStories'), {
  ssr: false,
  loading: () => <Loading />
})

const Achievements = dynamic(() => import('./Achievement').then(res => res.Achievements), {
  loading: () => <Loading />
})
const Services = dynamic(() => import('./Service').then(res => res.Services), {
  loading: () => <Loading />
})
const OtherService = dynamic(() => import('./OtherService').then(res => res.OtherService), {
  loading: () => <Loading />
})
const Community = dynamic(() => import('./Community').then(res => res.Community), {
  loading: () => <Loading />
})
const JoinOurTeam = dynamic(() => import('./JoinOutTeam').then(res => res.JoinOurTeam))
const Partners = dynamic(() => import('./Partners').then(res => res.Partners), {
  loading: () => <Loading />
})

const Main: FC<IGlobalDataType> = ({ data }) => {
  const { t } = useLang()
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

  const openChat = () => {
    window.open('https://t.me/ucc_outsource', '_blank')
  }

  return (
    <main className='main-page fade-in'>
      <ParentStory data={data} />
      <CarouselComp data={data} />
      <Achievements data={data} />
      <Services />
      <OtherService data={data} />
      <Community data={data} />
      <JoinOurTeam />
      <Partners data={data} />
      <div role='button' aria-label='to-top' className={`float-button ${isVisible ? 'visible' : 'hidden'}`}>
        <div className='floatBtnAnimate'></div>
        <FloatButton
          aria-label='button-float'
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className='d-flex align-center justify-center'
          icon={<ArrowUp style={{ color: '#fff', fontSize: '24px', textAlign: 'center' }} />}
        />
      </div>
      <FloatButton
        aria-label='button-float'
        onClick={openChat}
        style={{ width: '50px', height: '50px', bottom: '1em', right: '1em' }}
        className='d-flex align-center justify-center'
        icon={<MessageCircle style={{ color: '#252525', fontSize: '24px', textAlign: 'center' }} />}
      />
    </main>
  )
}

export default Main
