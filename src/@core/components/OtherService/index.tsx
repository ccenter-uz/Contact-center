'use client'
import { FC } from 'react'
import './style.scss'
import { useLang } from '@/@core/service/hooks/useLang'
import { Card, Carousel } from 'antd'
import { motion } from 'framer-motion'
import { BASIC_LINK, IGlobalDataType, IService } from '@/@core/utils/type'

// settings
const settings = {
  infinite: true,
  autoplay: true,
  speed: 1000,
  dots: false,
  draggable: true,
  slidesToShow: 4,
  initialSlide: 0,
  autoplaySpeed: 2500,
  responsive: [
    {
      breakpoint: 1665,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1120,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },

    {
      breakpoint: 820,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

export const OtherService: FC<IGlobalDataType> = ({ data }) => {
  const { t } = useLang()

  return (
    <section className='other-section d-flex flex-column justify-around gap-y-4'>
      <div className='other-title d-flex justify-center '>
        <h1>{t('other-service')}</h1>
      </div>

      <Carousel {...settings} className='other-carousel '>
        {data.Servise.map((card: IService, index: number) => {
          return (
            <motion.div
              key={index}
              initial={{ y: -100 }}
              viewport={{ once: true }}
              whileInView={{ y: 0 }}
              transition={{ type: 'spring', duration: 2, bounce: 0.1 }}
            >
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
            </motion.div>
          )
        })}
      </Carousel>
    </section>
  )
}
