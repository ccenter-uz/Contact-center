import { FC } from 'react'
import './style.scss'
import { useLang } from '@/@core/service/hooks/useLang'
import Link from 'next/link'

const Footer: FC = () => {
  const { t } = useLang()

  return (
    <footer className='footer d-flex flex-column justify-between'>
      <div className='footer-pre w-100 d-flex align-start justify-between flex-wrap gap-4'>
        <ul className='footer-links h-100 d-flex flex-column justify-between align-start gap-y-4'>
          <li>
            <img src='/assets/logo.svg' alt='logo' />
          </li>
          <li>
            <Link href={'#services'}>{t('services')}</Link>
          </li>
          <li>
            <Link href={'#services'}>{t('out-team')}</Link>
          </li>
          <li>
            <Link href={'#services'}>{t('partners')}</Link>
          </li>
        </ul>
        <div className='footer-right d-flex align-start justify-between gap-3'>
          <ul className='footer-address h-100 d-flex flex-column justify-between align-start gap-y-5'>
            <li className='d-flex align-center gap-3'>
              <img src='/assets/footer/map.svg' alt='map' />
              <p>
                Наш адрес: <br /> Toshkent sh. Furqat 23 A
              </p>
            </li>
            <li className='d-flex align-center gap-3'>
              <img src='/assets/footer/message.svg' alt='message' />
              <p>
                Почта для связи: <br /> infoedugately@gmail.com
              </p>
            </li>
            <li className='d-flex align-center gap-3'>
              <img src='/assets/footer/phone.svg' alt='phone' />
              <p>+998 (55) 506 1011</p>
            </li>
          </ul>
          <ul className='footer-uzdst h-100 d-flex flex-column justify-between align-start gap-2'>
            <li className='d-flex align-center gap-3'>
              <img src='/assets/footer/facebook-logo.svg' alt='facebook' />
              <img src='/assets/footer/instagram-logo.svg' alt='insta' />
              <img src='/assets/footer/youtube-logo.svg' alt='youtube' />
            </li>
            <li>
              <img src='/assets/footer/uzdst.svg' alt='uzdst' />
            </li>
            <li>
              <img src='/assets/footer/cert-int.svg' alt='cert' />
            </li>
          </ul>
        </div>
      </div>
      <div className='footer-copyright m-t-3 d-flex align-center justify-center'>
        <p>© 2023 • All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer
