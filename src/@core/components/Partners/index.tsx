import { FC } from 'react'
import './style.scss'
import { useLang } from '@/@core/service/hooks/useLang'
import { BASIC_LINK, IGlobalDataType, IPartners } from '@/@core/utils/type'
import dynamic from 'next/dynamic'
import Image from 'next/image'

const AliceCarousel = dynamic(() => import('react-alice-carousel'), { ssr: false })

const responsive = {
  0: { items: 1 },
  545: { items: 2 },
  768: { items: 3 },
  1154: { items: 4 },
  1500: { items: 5 }
}
export const Partners: FC<IGlobalDataType> = ({ data }) => {
  const { t } = useLang()
  const items = data.partners.map((image: IPartners) => {
    return (
      <div key={image.id} className='partner-img'>
        <Image
          fill
          sizes='(max-width:400px) 400px,(max-width:768px) 768px,(max-width:1024px) 1024px,100vw'
          src={BASIC_LINK + '' + image.image_link}
          alt='partner'
        />
      </div>
    )
  })

  return (
    <section id='partners' className='partners d-flex flex-column justify-around gap-3'>
      <div className='partners-title d-flex justify-center'>
        <h1>{t('partners')}</h1>
      </div>
      <div className='partners-images  d-flex align-center justify-between'>
        <AliceCarousel
          disableButtonsControls
          responsive={responsive}
          items={items}
          animationDuration={2500}
          autoPlay
          infinite
        />
      </div>
    </section>
  )
}
