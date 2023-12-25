import { FC } from 'react'
import './style.scss'
import { Card, Carousel } from 'antd'

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

export const Comment: FC = () => {
  const data = [
    {
      id: 1,
      image: '/assets/partners/clickup.svg',
      text: `Built Wicket longer admire do barton vanity itself do in it. Built Wicket longer admire do barton vanity
      itself do in it. Built Wicket longer admire do barton vanity itself do in it. Built Wicket longer admire do
      barton vanity itself do in it. Built Wicket longer admire do barton vanity itself do in it. Built Wicket
      longer admire do barton vanity itself do in it.`
    },
    {
      id: 2,
      image: '/assets/partners/clickup.svg',
      text: `Built Wicket longer admire do barton vanity itself do in it. Built Wicket longer admire do barton vanity
      itself do in it. Built Wicket longer admire do barton vanity itself do in it. Built Wicket longer admire do
      barton vanity itself do in it. Built Wicket longer admire do barton vanity itself do in it. Built Wicket
      longer admire do barton vanity itself do in it.`
    },
    {
      id: 3,
      image: '/assets/partners/clickup.svg',
      text: `Built Wicket longer admire do barton vanity itself do in it. Built Wicket longer admire do barton vanity
      itself do in it. Built Wicket longer admire do barton vanity itself do in it. Built Wicket longer admire do
      barton vanity itself do in it. Built Wicket longer admire do barton vanity itself do in it. Built Wicket
      longer admire do barton vanity itself do in it.`
    },
    {
      id: 4,
      image: '/assets/partners/clickup.svg',
      text: `Built Wicket longer admire do barton vanity itself do in it. Built Wicket longer admire do barton vanity
      itself do in it. Built Wicket longer admire do barton vanity itself do in it. Built Wicket longer admire do
      barton vanity itself do in it. Built Wicket longer admire do barton vanity itself do in it. Built Wicket
      longer admire do barton vanity itself do in it.`
    },
    {
      id: 5,
      image: '/assets/partners/clickup.svg',
      text: `Built Wicket longer admire do barton vanity itself do in it. Built Wicket longer admire do barton vanity
      itself do in it. Built Wicket longer admire do barton vanity itself do in it. Built Wicket longer admire do
      barton vanity itself do in it. Built Wicket longer admire do barton vanity itself do in it. Built Wicket
      longer admire do barton vanity itself do in it.`
    },
    {
      id: 6,
      image: '/assets/partners/clickup.svg',
      text: `Built Wicket longer admire do barton vanity itself do in it. Built Wicket longer admire do barton vanity
      itself do in it. Built Wicket longer admire do barton vanity itself do in it. Built Wicket longer admire do
      barton vanity itself do in it. Built Wicket longer admire do barton vanity itself do in it. Built Wicket
      longer admire do barton vanity itself do in it.`
    },
    {
      id: 7,
      image: '/assets/partners/clickup.svg',
      text: `Built Wicket longer admire do barton vanity itself do in it. Built Wicket longer admire do barton vanity
      itself do in it. Built Wicket longer admire do barton vanity itself do in it. Built Wicket longer admire do
      barton vanity itself do in it. Built Wicket longer admire do barton vanity itself do in it. Built Wicket
      longer admire do barton vanity itself do in it.`
    }
  ]

  return (
    <Carousel {...settings} className='comment d-flex align-center justify-center'>
      {data?.map(card => {
        return (
          <Card
            key={card.id}
            title={
              <div className='comment-card-title d-flex align-center justify-center p-y-2 '>
                <img src={card.image} alt='clickup' />
              </div>
            }
          >
            <p>{card.text}</p>
          </Card>
        )
      })}
    </Carousel>
  )
}
