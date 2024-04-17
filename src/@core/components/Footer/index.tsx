'use client'
import { FC } from 'react'
import './style.scss'
import { useLang } from '@/@core/service/hooks/useLang'
import Link from 'next/link'
import Marquee from './Marquee'

const Footer: FC = () => {
  const { t } = useLang()

  return (
    <footer className={`footer fade-in d-flex flex-column justify-between`}>
      <div aria-label='upper-section' className='footer-pre w-100 d-flex align-start justify-between flex-wrap gap-4'>
        <ul className='footer-links h-100 d-flex flex-column justify-between align-start gap-y-4'>
          <li>
            <img
              fetchPriority='low'
              src='/assets/logo.svg'
              alt='logo'
              onClick={() => window.scrollTo(0, 0)}
              style={{ cursor: 'pointer' }}
              loading='lazy'
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
              <img fetchPriority='low' src='/assets/footer/map.svg' alt='map' loading='lazy' />
              <a href='https://maps.app.goo.gl/as92wSiCT2NRgUHt7' target='_blank'>
                {t('footer-address')} <br /> {t('address')}
              </a>
            </li>
            <li className='d-flex align-center gap-3'>
              <img src='/assets/footer/message.svg' alt='message' fetchPriority='low' loading='lazy' />
              <a href='mailto:ucc.outsource@gmail.com' target='_top'>
                {t('footer-mail')} <br /> ucc.outsource@gmail.com
              </a>
            </li>
            <li className='d-flex align-center gap-3'>
              <img src='/assets/footer/phone.svg' alt='phone' fetchPriority='low' loading='lazy' />
              <a href='tel:+998712009779'>+998 71 200 97 79</a>
            </li>
          </ul>
          <ul className='footer-uzdst h-100 d-flex flex-column justify-between align-start gap-2'>
            <li className='d-flex align-center gap-3'>
              <a href='https://www.facebook.com/contactcenteruz/' target='_blank'>
                <img src='/assets/footer/facebook-logo.svg' alt='facebook' fetchPriority='low' loading='lazy' />
              </a>
              <a href='https://www.instagram.com/contactcenter.uz/' target='_blank'>
                <img src='/assets/footer/instagram-logo.svg' alt='insta' fetchPriority='low' loading='lazy' />
              </a>
              <a href='https://t.me/contactcenteruz' target='_blank'>
                <img src='/assets/footer/youtube-logo.svg' alt='youtube' fetchPriority='low' loading='lazy' />
              </a>
            </li>
            <li>
              <img src='/assets/footer/uzdst.svg' alt='uzdst' fetchPriority='low' loading='lazy' />
            </li>
            <li>
              <img src='/assets/footer/cert-int.svg' alt='cert' fetchPriority='low' loading='lazy' />
            </li>
          </ul>
        </div>
      </div>
      <div aria-label='bottom-section' className='footer-copyright m-t-3 d-flex align-center justify-center'>
        <p>{t('footer-reserved')}</p>
      </div>
      <Marquee />
    </footer>
  )
}

export default Footer
