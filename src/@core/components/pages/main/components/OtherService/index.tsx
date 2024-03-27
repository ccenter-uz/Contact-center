import { FC } from 'react'
import './style.scss'
import { useLang } from '@/@core/service/hooks/useLang'
import { Card } from 'antd'
import { BASIC_LINK, IGlobalDataType, IService } from '@/@core/utils/type'
import dynamic from 'next/dynamic'

const AliceCarousel = dynamic(() => import('react-alice-carousel'), { ssr: false })

const responsive = {
  0: { items: 1 },
  545: { items: 1 },
  768: { items: 2 },
  1154: { items: 3 },
  1500: { items: 4 }
}

export const OtherService: FC<IGlobalDataType> = ({ data }) => {
  const { t } = useLang()
  const items = data?.Servise.map((card: IService, index: number) => {
    return (
      <div className='other-card' key={index} role='group' aria-label='card'>
        <div className='other-card-title-block' aria-label='card-title'>
          <h1>{card.title}</h1>
          <h2>{card?.pre_title || 'От 50 000 UZS'}</h2>
        </div>
        <div className='other-card-body'>
          <p>
            {card?.paragraph ||
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. '}
          </p>
          <div className='other-img'>
            <img loading='lazy' fetchPriority='low' src={BASIC_LINK + '' + card.image_link} alt={'card-image'} />
          </div>
        </div>
      </div>
    )
  })

  return (
    <section className='other-section d-flex flex-column justify-around gap-y-4'>
      <div className='other-title d-flex justify-center '>
        <h1>{t('other-service')}</h1>
      </div>
      <AliceCarousel disableButtonsControls responsive={responsive} items={items}  animationDuration={1500} />
    </section>
  )
}
