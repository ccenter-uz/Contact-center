'use client'
import { FC } from 'react'
import './style.scss'
import { Carousel } from 'antd'

type ISwiper = {
  images: string[]
}

const setting = {
  infinite: true,
  autoplay: true,
  slidesToShow: 3,
  speed: 500,
  draggable: true,
  dots: false,
  autoplaySpeed: 2500,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
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

const ImageSwiper: FC<ISwiper> = ({ images }) => {
  return (
    <Carousel {...setting} className='slide-container'>
      {images.map((image, index) => {
        return <img key={index} src={image} alt='image' />
      })}
    </Carousel>
  )
}

export default ImageSwiper