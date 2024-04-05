import { FC, useEffect, useState } from 'react'
import './style.scss'
import { GetLinks } from '../../api'
import TabButtonItem from '../../modal/TabButtonItem'
import { useLang } from '@/@core/service/hooks/useLang'

type LinkType = {
  id: string
  title_ru: string
  title: string
  title_en: string
}

export const TabButtons: FC = () => {
  const [links, setLinks] = useState<LinkType[]>([])
  const { locale } = useLang()

  useEffect(() => {
    GetLinks().then(res => setLinks(res.map((link: LinkType) => ({ key: link.id, ...link }))))
  }, [])

  return (
    <div id='tab-buttons' aria-label='tab-section' className='d-flex align-center gap-1'>
      {links.map((link: LinkType) => (
        <TabButtonItem
          key={link.id}
          title={
            (locale === 'ru' && link.title_ru) ||
            (locale === 'uz' && link.title) ||
            (locale === 'en' && link.title_en) ||
            ''
          }
          id={link.id}
        />
      ))}
    </div>
  )
}
