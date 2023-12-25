'use client'
import { FC, Suspense, useState } from 'react'
import './style.scss'
import Link from 'next/link'
import { useLang } from '@/@core/service/hooks/useLang'
import LanguageSwitcher from '../SwitchLng'
import ShapeLoading from '../ShapeLoading'
import dynamic from 'next/dynamic'
import { SideBar } from '../Sidebar'

const StoriesComponent = dynamic(() => import('../Stories').then(res => res.StoriesComponent), {
  ssr: false,
  loading: () => <ShapeLoading width='60px ' height='60px' radius='50%' />
})

const Header: FC = () => {
  const { t, locale } = useLang()

  const data = [
    {
      id: 1,
      title: 'Story',
      story: [
        {
          url: '/assets/collective/community.svg',
          type: 'image',
          header: 'Assets',
          duration: 1500
        },
        {
          url: '/assets/collective/community.svg',
          type: 'image',
          header: 'Assets',
          duration: 1500
        },
        {
          url: '/assets/collective/community.svg',
          type: 'image',
          header: 'Assets',
          duration: 1500
        }
      ]
    },
    {
      id: 2,
      title: 'Story',
      story: [
        {
          url: '/assets/collective/community.svg',
          type: 'image',
          header: 'Assets',
          duration: 1500
        },
        {
          url: '/assets/collective/community.svg',
          type: 'image',
          header: 'Assets',
          duration: 1500
        },
        {
          url: '/assets/collective/community.svg',
          type: 'image',
          header: 'Assets',
          duration: 1500
        }
      ]
    },
    {
      id: 3,
      title: 'Story',
      story: [
        {
          url: '/assets/collective/community.svg',
          type: 'image',
          header: 'Assets',
          duration: 1500
        },
        {
          url: '/assets/collective/community.svg',
          type: 'image',
          header: 'Assets',
          duration: 1500
        },
        {
          url: '/assets/collective/community.svg',
          type: 'image',
          header: 'Assets',
          duration: 1500
        }
      ]
    },
    {
      id: 4,
      title: 'Story',
      story: [
        {
          url: '/assets/collective/community.svg',
          type: 'image',
          header: 'Assets',
          duration: 1500
        },
        {
          url: '/assets/collective/community.svg',
          type: 'image',
          header: 'Assets',
          duration: 1500
        },
        {
          url: '/assets/collective/community.svg',
          type: 'image',
          header: 'Assets',
          duration: 1500
        }
      ]
    },
    {
      id: 5,
      title: 'Story',
      story: [
        {
          url: '/assets/collective/community.svg',
          type: 'image',
          header: 'Assets',
          duration: 1500
        },
        {
          url: '/assets/collective/community.svg',
          type: 'image',
          header: 'Assets',
          duration: 1500
        },
        {
          url: '/assets/collective/community.svg',
          type: 'image',
          header: 'Assets',
          duration: 1500
        }
      ]
    },
    {
      id: 6,
      title: 'Story',
      story: [
        {
          url: '/assets/collective/community.svg',
          type: 'image',
          header: 'Assets',
          duration: 1500
        },
        {
          url: '/assets/collective/community.svg',
          type: 'image',
          header: 'Assets',
          duration: 1500
        },
        {
          url: '/assets/collective/community.svg',
          type: 'image',
          header: 'Assets',
          duration: 1500
        }
      ]
    },
    {
      id: 7,
      title: 'Story',
      story: [
        {
          url: '/assets/collective/community.svg',
          type: 'image',
          header: 'Assets',
          duration: 1500
        },
        {
          url: '/assets/collective/community.svg',
          type: 'image',
          header: 'Assets',
          duration: 1500
        },
        {
          url: '/assets/collective/community.svg',
          type: 'image',
          header: 'Assets',
          duration: 1500
        }
      ]
    },
    {
      id: 8,
      title: 'Story',
      story: [
        {
          url: '/assets/collective/community.svg',
          type: 'image',
          header: 'Assets',
          duration: 1500
        },
        {
          url: '/assets/collective/community.svg',
          type: 'image',
          header: 'Assets',
          duration: 1500
        },
        {
          url: '/assets/collective/community.svg',
          type: 'image',
          header: 'Assets',
          duration: 1500
        }
      ]
    }
  ]

  return (
    <header id='header' className='d-flex flex-column justify-center align-between '>
      <div className='d-flex justify-between align-center m-b-3'>
        <img id='logo' src={'/assets/logo.svg'} alt='logo' />
        <SideBar />
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
      <div className='circle-wrapper w-100 d-flex  justify-between align-center m-t-1 gap-x-3'>
        <Suspense fallback={<ShapeLoading width='60px ' height='60px' radius='50%' />}>
          {data?.map((item, index) => {
            return <StoriesComponent key={index} id={item.id} title={item.title} story={item.story} />
          })}
        </Suspense>
      </div>
    </header>
  )
}

export default Header
