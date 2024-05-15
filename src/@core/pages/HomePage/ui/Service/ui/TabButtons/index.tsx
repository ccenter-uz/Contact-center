import { FC, useEffect, useState } from 'react'
import './style.scss'
import { GetLinks } from '../../api/serverAction'
import TabButtonItem from '../../model/TabButtonItem'
import { getLng } from '../../utils'
import { useLang } from '@/@core/apps/hooks/useLang'
import { useRouter } from 'next/navigation'

type LinkType = {
  id: string
  title_ru: string
  title: string
  title_en: string
}

export const TabButtons: FC = () => {
  const [links, setLinks] = useState<LinkType[]>([])
  const { locale } = useLang()
  const router = useRouter()

  useEffect(() => {
    GetLinks().then(res => {
      setLinks(res.map((link: LinkType) => ({ key: link.id, ...link }))), router.replace(`?service=${res[0].id}`)
    })
  }, [])

  return (
    <div id='tab-buttons' aria-label='tab-section' className='d-flex align-center gap-1'>
      {links.map((link: LinkType) => (
        <TabButtonItem key={link.id} title={getLng(locale, link, 'title')} id={link.id} />
      ))}
    </div>
  )
}
