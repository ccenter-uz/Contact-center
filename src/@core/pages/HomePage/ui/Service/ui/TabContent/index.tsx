import { FC, useEffect, useState } from 'react'
import { GetContent } from '../../api/serverAction'
import { useSearchParams } from 'next/navigation'
import { renderNode } from '../../utils'
import { useDataContext } from '@/@core/apps/hooks/useDataContext'

type Props = {}
export type DataType = {
  key: string
  id: string
  type: 'banner' | 'card'
  title_ru: string
  title: string
  title_en: string
  phone: string
  paragraph_uz: string
  paragraph_ru: string
  paragraph_en: string
  services?: { id: string; name_uz: string; name_ru: string; name_en: string }[]
  span_ru?: string
  span_uz?: string
  span_en?: string
  content_text_ru?: string
  content_text_uz?: string
  content_text_en?: string
  icon?: string
  background_image: string
}

const TabContent: FC<Props> = () => {
  const { tabData, setTabData } = useDataContext()
  const [loading, setLoading] = useState<boolean>(false)
  const searchParams = useSearchParams()

  useEffect(() => {
    if (searchParams.has('service')) {
      const id = searchParams.get('service') as string
      setLoading(true)
      GetContent(id).then(res => {
        setTabData(
          res.servises.map((item: any) => ({
            ...item.text,
            key: item.id,
            id: item.id,
            background_image: item.image_link,
            icon: item.icon_link,
            type: item.type
          }))
        ),
          setLoading(false)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams])

  return (
    <main id='tab-content' className='m-3' aria-label='tab-content'>
      {renderNode(tabData, loading)}
    </main>
  )
}
export default TabContent
