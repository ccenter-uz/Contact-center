'use client'
import { FC } from 'react'
import './style.scss'
import Link from 'next/link'
import { useLang } from '@/@core/service/hooks/useLang'
import { Globe } from 'react-feather'
import { Popover, Space } from 'antd'
import { IGlobalDataType } from '@/@core/utils/type'
import dynamic from 'next/dynamic'
import Loading from '@/app/[locale]/loading'
import LanguageSwitcher from '@/@core/components/SwitchLng'

const ParentStory = dynamic(() => import('./parentStory'), { ssr: false, loading: () => <Loading /> })
const SideBar = dynamic(() => import('../Sidebar').then(res => res.SideBar))

const content = (
  <Space className='d-flex flex-column'>
    <Link href='/en' locale='en' aria-current='page'>
      Eng
    </Link>
    <Link href='/ru' locale='ru' aria-current='page'>
      Рус
    </Link>
    <Link href='/uz' locale='uz' aria-current='page'>
      Uzb
    </Link>
  </Space>
)

const Header: FC<IGlobalDataType> = ({ data }) => {
  const { t, locale } = useLang()

  return (
    <header id='header' className='d-flex flex-column justify-center align-between '>
      <div className='d-flex justify-between align-center m-b-3'>
        <Link href={'/'}>
          <img sizes='(min-width:768px) 768px,100vw' id='logo' src={'/assets/logo.svg'} alt='logo' aria-label='logo' />
        </Link>
        <div className='block d-flex align-center gap-x-1'>
          <Popover content={content}>
            <Globe size={20} />
          </Popover>
          <SideBar />
        </div>
        <ul className='header-links w-30 d-flex align-center justify-between'>
          <li>
            <Link href={`#services`} locale={locale} aria-current='page'>
              {t('services')}
            </Link>
          </li>
          <li>
            <Link href={`#community`} locale={locale} aria-current='page'>
              {t('out-team')}
            </Link>
          </li>
          <li>
            <Link href={`#partners`} locale={locale} aria-current='page'>
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
