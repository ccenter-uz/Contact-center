import { FC } from 'react'
import './style.scss'
import { IGlobalDataType } from '@/@core/shared/type'
import dynamic from 'next/dynamic'
import Loading from '@/app/[locale]/loading'
import { useLang } from '@/@core/apps/hooks/useLang'

const ImageSwiper = dynamic(() => import('@/@core/shared/ui/Slider'), { loading: () => <Loading /> })

export const Community: FC<IGlobalDataType> = ({ data }) => {
  const { t } = useLang()

  return (
    <section id='community' className='w-100 community d-flex flex-column align-center '>
      <div className='community-title d-flex justify-center m-b-4'>
        <h1>{t('collective')}</h1>
      </div>
      <div className='community-content d-flex align-start gap-3 m-t-4'>
        <div className='content-text'>
          <p>{t('community-title')}</p>
          <br />
          <span>{t('community-paragraph')}</span>
        </div>
        <div className='content-images '>
          <ImageSwiper images={data?.TeamImages} />
        </div>
      </div>
    </section>
  )
}

export default Community
