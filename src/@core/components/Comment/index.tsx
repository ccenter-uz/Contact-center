import { FC } from 'react'
import './style.scss'
import { Card, Carousel } from 'antd'
import { BASIC_LINK, IGlobalDataType, IPartners } from '@/@core/utils/type'

const settings = {
  infinite: true,
  autoplay: true,
  speed: 800,
  dots: false,
  draggable: true,
  slidesToShow: 4,
  initialSlide: 0,
  autoplaySpeed: 2500,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
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

export const Comment: FC<IGlobalDataType> = ({ data }) => {
  return (
    <Carousel {...settings} className='comment d-flex align-center justify-center'>
      {data.partners.map((partner: IPartners) => {
        return (
          <Card
            key={partner.id}
            title={
              <div className='comment-card-title d-flex align-center justify-center p-y-2 '>
                <img
                  src={BASIC_LINK + '' + partner.image_link}
                  alt='clickup'
                  width={'160px'}
                  height={'80px'}
                  loading='lazy'
                />
              </div>
            }
          >
            <p>{partner.camment}</p>
          </Card>
        )
      })}
    </Carousel>
  )
}
