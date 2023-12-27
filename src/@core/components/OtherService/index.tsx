'use client'
import { FC } from 'react'
import './style.scss'
import { useLang } from '@/@core/service/hooks/useLang'
import { Card, Carousel } from 'antd'
import { motion } from 'framer-motion'

const cardData = [
  {
    id: 1,
    title: 'Axborot va ma’lumot xizmati',
    image: '/assets/otherService/chip.svg',
    alt: 'chip'
  },
  {
    id: 2,
    title: 'Tabriklash xizmati',
    image: '/assets/otherService/present.svg',
    alt: 'present'
  },
  {
    id: 3,
    title: '1064 xizmati',
    image: '/assets/otherService/earphones.svg',
    alt: 'earphones'
  },
  {
    id: 4,
    title: '1086 xizmati',
    image: '/assets/otherService/earphones.svg',
    alt: 'earphones'
  },
  {
    id: 5,
    title: 'Axborot va ma’lumot xizmati',
    image: '/assets/otherService/chip.svg',
    alt: 'earphones'
  },
  {
    id: 6,
    title: 'Axborot va ma’lumot xizmati',
    image: '/assets/otherService/present.svg',
    alt: 'earphones'
  }
]
// settings
const settings = {
  infinite: true,
  autoplay: true,
  speed: 500,
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
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 1120,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
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

export const OtherService: FC = () => {
  const { t } = useLang()

  return (
    <section className='other-section d-flex flex-column justify-around gap-y-4'>
      <div className='other-title d-flex justify-center '>
        <h1>{t('other-service')}</h1>
      </div>
      <Carousel {...settings} className='other-carousel'>
        {cardData?.map(card => {
          return (
            <motion.div
              key={card.id}
              initial={{ y: -100 }}
              viewport={{ once: true }}
              whileInView={{ y: 0 }}
              transition={{ type: 'spring', duration: 2, bounce: 0.1 }}
            >
              <Card hoverable className='other-card'>
                <h1>{card.title}</h1>
                <div className='other-img d-flex align-end justify-end'>
                  <motion.img whileHover={{ scale: 1.1 }} src={card.image} alt={card.alt} />
                </div>
              </Card>
            </motion.div>
          )
        })}
      </Carousel>
    </section>
  )
}
