import { FC } from 'react'
import './style.scss'
import { useLang } from '@/@core/service/hooks/useLang'
import { Carousel } from 'antd'
import { BASIC_LINK, IGlobalDataType, IPartners } from '@/@core/utils/type'

const setting = {
  infinite: true,
  autoplay: true,
  centerMode: true,
  slidesToShow: 5,
  speed: 800,
  draggable: true,
  dots: false,
  autoplaySpeed: 3500,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}
export const Partners: FC<IGlobalDataType> = ({ data }) => {
  const { t } = useLang()

  return (
    <section id='partners' className='partners d-flex flex-column justify-around gap-3'>
      <div className='partners-title d-flex justify-center'>
        <h1>{t('partners')}</h1>
      </div>
      <Carousel {...setting} className='partners-images m-b-3 d-flex align-center justify-between gap-3'>
        {data.partners.map((image: IPartners) => {
          return (
            <img
              key={image.id}
              src={BASIC_LINK + '' + image.image_link}
              alt='partner'
              loading='lazy'
              placeholder='loading...'
            />
          )
        })}
      </Carousel>
    </section>
  )
}
