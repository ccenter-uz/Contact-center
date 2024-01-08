'use client'
import { FC } from 'react'
import './style.scss'
import Link from 'next/link'
import { useLang } from '@/@core/service/hooks/useLang'
import { SideBar } from '../Sidebar'
import { Globe } from 'react-feather'
import { Popover, Space } from 'antd'
import { IGlobalDataType } from '@/@core/utils/type'
import dynamic from 'next/dynamic'
import ShapeLoading from '../ShapeLoading'

const ParentStory = dynamic(() => import('./parentStory'), {
  ssr: false,
  loading: () => (
    <div className='d-flex align-center justify-between'>
      <div className='m-y-2 d-flex flex-column gap-y-1'>
        <ShapeLoading width='60px' height='60px' radius='50%' />
        <ShapeLoading width='60px' height='15px' radius='5px' />
      </div>
      <div className='m-y-2 d-flex flex-column gap-y-1'>
        <ShapeLoading width='60px' height='60px' radius='50%' />
        <ShapeLoading width='60px' height='15px' radius='5px' />
      </div>
      <div className='m-y-2 d-flex flex-column gap-y-1'>
        <ShapeLoading width='60px' height='60px' radius='50%' />
        <ShapeLoading width='60px' height='15px' radius='5px' />
      </div>
      <div className='m-y-2 d-flex flex-column gap-y-1'>
        <ShapeLoading width='60px' height='60px' radius='50%' />
        <ShapeLoading width='60px' height='15px' radius='5px' />
      </div>
      <div className='m-y-2 d-flex flex-column gap-y-1'>
        <ShapeLoading width='60px' height='60px' radius='50%' />
        <ShapeLoading width='60px' height='15px' radius='5px' />
      </div>
    </div>
  )
})
const LanguageSwitcher = dynamic(() => import('@/@core/components/SwitchLng'), {
  ssr: false,
  loading: () => <ShapeLoading width='80px' height='20px' radius='8px' />
})

const content = (
  <Space className='d-flex flex-column'>
    <Link href='/en' locale='en'>
      Eng
    </Link>
    <Link href='/ru' locale='ru'>
      Рус
    </Link>
    <Link href='/uz' locale='uz'>
      Uzb
    </Link>
  </Space>
)

const Header: FC<IGlobalDataType> = ({ data }) => {
  const { t, locale } = useLang()

  return (
    <header id='header' className='d-flex flex-column justify-center align-between '>
      <div className='d-flex justify-between align-center m-b-3'>
        <img id='logo' src={'/assets/logo.svg'} alt='logo' loading='lazy' placeholder='loading...' />
        <div className='block d-flex align-center gap-x-1'>
          <Popover content={content}>
            <Globe size={20} />
          </Popover>
          <SideBar />
        </div>
        <ul className='header-links w-30 d-flex align-center justify-between'>
          <li>
            <Link href={`#services`} locale={locale}>
              {t('services')}
            </Link>
          </li>
          <li>
            <Link href={`#community`} locale={locale}>
              {t('out-team')}
            </Link>
          </li>
          <li>
            <Link href={`#partners`} locale={locale}>
              {t('partners')}
            </Link>
          </li>
        </ul>
        <div className='switcher'>
          <LanguageSwitcher />
        </div>
      </div>
      <p style={{ fontSize: '12px' }}>{t('follow-last-news')}</p>
      <ParentStory data={data} />
    </header>
  )
}

export default Header
