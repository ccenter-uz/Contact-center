import { FC } from 'react'
import './style.scss'
import Link from 'next/link'
import { useLang } from '@/@core/service/hooks/useLang'
import LanguageSwitcher from '../SwitchLng'
import { SideBar } from '../Sidebar'
import { ParentStory } from './parentStory'

const Header: FC = () => {
  const { t, locale } = useLang()

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
      <ParentStory />
    </header>
  )
}

export default Header
