'use client'
import { FC } from 'react'
import './style.scss'
import { useLang } from '@/@core/service/hooks/useLang'
import Link from 'next/link'
import Marquee from './Marquee'

const Footer: FC = () => {
  const { t } = useLang()

  return (
    <footer className='footer d-flex flex-column justify-between'>
      <div className='footer-pre w-100 d-flex align-start justify-between flex-wrap gap-4'>
        <ul className='footer-links h-100 d-flex flex-column justify-between align-start gap-y-4'>
          <li>
            <img
              src='/assets/logo.svg'
              alt='logo'
              placeholder='loading...'
              onClick={() => window.scrollTo(0, 0)}
              style={{ cursor: 'pointer' }}
            />
          </li>
          <li>
            <Link href={'#services'}>{t('services')}</Link>
          </li>
          <li>
            <Link href={'#community'}>{t('out-team')}</Link>
          </li>
          <li>
            <Link href={'#partners'}>{t('partners')}</Link>
          </li>
        </ul>
        <div className='footer-right d-flex align-start justify-between gap-3'>
          <ul className='footer-address h-100 d-flex flex-column justify-between align-start gap-y-5'>
            <li className='d-flex align-center gap-3'>
              <img src='/assets/footer/map.svg' alt='map' placeholder='loading...' />
              <a href='https://maps.app.goo.gl/as92wSiCT2NRgUHt7' target='_blank'>
                {t('footer-address')} <br /> {t('address')}
              </a>
            </li>
            <li className='d-flex align-center gap-3'>
              <img src='/assets/footer/message.svg' alt='message' placeholder='loading...' />
              <a href='mailto:ucc.outsource@gmail.com' target='_top'>
                {t('footer-mail')} <br /> ucc.outsource@gmail.com
              </a>
            </li>
            <li className='d-flex align-center gap-3'>
              <img src='/assets/footer/phone.svg' alt='phone' placeholder='loading...' />
              <a href='tel:+998712009779'>+998 71 200 97 79</a>
            </li>
          </ul>
          <ul className='footer-uzdst h-100 d-flex flex-column justify-between align-start gap-2'>
            <li className='d-flex align-center gap-3'>
              <a href='https://www.facebook.com/contactcenteruz/' target='_blank'>
                <img src='/assets/footer/facebook-logo.svg' alt='facebook' placeholder='loading...' loading='lazy' />
              </a>
              <a href='https://www.instagram.com/contactcenter.uz/' target='_blank'>
                <img src='/assets/footer/instagram-logo.svg' alt='insta' placeholder='loading...' loading='lazy' />
              </a>
              <a href='https://t.me/contactcenteruz' target='_blank'>
                <img src='/assets/footer/youtube-logo.svg' alt='youtube' placeholder='loading...' loading='lazy' />
              </a>
            </li>
            <li>
              <img src='/assets/footer/uzdst.svg' alt='uzdst' placeholder='loading...' loading='lazy' />
            </li>
            <li>
              <img src='/assets/footer/cert-int.svg' alt='cert' placeholder='loading...' loading='lazy' />
            </li>
          </ul>
        </div>
      </div>
      <div className='footer-copyright m-t-3 d-flex align-center justify-center'>
        <p>{t('footer-reserved')}</p>
      </div>
      <Marquee />
    </footer>
  )
}

export default Footer
