'use client'
import { FC } from 'react'
import './style.scss'
import { useLang } from '@/@core/service/hooks/useLang'
import { Card } from 'antd'
import { motion } from 'framer-motion'
import { BASIC_LINK, IGlobalDataType, IService } from '@/@core/utils/type'
import AliceCarousel from 'react-alice-carousel'

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
      <div key={index}>
        <Card hoverable className='other-card'>
          <h1>{card.title}</h1>
          <div className='other-img d-flex align-end justify-end'>
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={BASIC_LINK + '' + card.image_link}
              alt={'card-image'}
              loading='lazy'
              placeholder='loading...'
            />
          </div>
        </Card>
      </div>
    )
  })

  return (
    <section className='other-section d-flex flex-column justify-around gap-y-4'>
      <div className='other-title d-flex justify-center '>
        <h1>{t('other-service')}</h1>
      </div>
      <AliceCarousel disableButtonsControls responsive={responsive} items={items} animationDuration={1500} />
    </section>
  )
}
