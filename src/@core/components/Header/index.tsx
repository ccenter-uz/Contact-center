import { FC, Suspense } from 'react'
import './style.scss'
import Link from 'next/link'
import { useLang } from '@/@core/service/hooks/useLang'
import LanguageSwitcher from '../SwitchLng'
import { Stories } from '../Stories'
import Loading from '@/app/[locale]/loading'
import ShapeLoading from '../ShapeLoading'

const Header: FC = () => {
  const { t, locale } = useLang()

  return (
    <header id='header' className='d-flex flex-column justify-center align-between '>
      <div className='d-flex justify-between align-center m-b-3'>
        <img id='logo' src={'/assets/logo.svg'} alt='logo' />
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
      <Suspense fallback={<ShapeLoading width='60px ' height='60' radius='50%' />}>
        <Stories />
      </Suspense>
    </header>
  )
}

export default Header
