import './style.scss'
import { Menu } from 'react-feather'
import Link from 'next/link'
import { useLang } from '@/@core/service/hooks/useLang'
import { Popover, Space } from 'antd'

const content = (t: any, locale: string) => (
  <div>
    <Space className='d-flex flex-column burger-links'>
      <Link href={`#services`} locale={locale} style={{ color: '#252525' }}>
        {t('services')}
      </Link>
      <Link href={`#community`} locale={locale} style={{ color: '#252525' }}>
        {t('out-team')}
      </Link>
      <Link href={`#partners`} locale={locale} style={{ color: '#252525' }}>
        {t('partners')}
      </Link>
    </Space>
  </div>
)

const SideBar = () => {
  const { t, locale } = useLang()

  return (
    <div className='menu-burger'>
      <Popover content={() => content(t, locale)}>
        <Menu />
      </Popover>
    </div>
  )
}

export { SideBar }
