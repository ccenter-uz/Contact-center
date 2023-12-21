'use client'
import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// slides import
import 'swiper/swiper-bundle.css'

type ISwiper = {
  images: string[]
}

const ImageSwiper: FC<ISwiper> = ({ images }) => {
  return (
    <Swiper
      autoplay={{
        delay: 0
      }}
      loop
      breakpoints={{
        0: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 1
        },
        1024: {
          slidesPerView: 2
        },
        1400: {
          slidesPerView: 3
        }
      }}
      spaceBetween={20}
      slidesPerView={3}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Slide ${index}`} width={'100%'} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default ImageSwiper
