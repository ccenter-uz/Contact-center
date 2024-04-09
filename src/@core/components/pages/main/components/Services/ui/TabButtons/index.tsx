import { FC, useEffect, useState } from 'react'
import './style.scss'
import { GetLinks } from '../../api/serverAction'
import TabButtonItem from '../../modal/TabButtonItem'
import { useLang } from '@/@core/service/hooks/useLang'
import { getLng } from '../../utils'

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
        <TabButtonItem key={link.id} title={getLng(locale, link, 'title')} id={link.id} />
      ))}
    </div>
  )
}
