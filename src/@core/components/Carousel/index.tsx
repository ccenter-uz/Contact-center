'use client'
import { FC, useRef } from 'react'
import './style.scss'
import { Carousel } from 'antd'
import { ArrowLeft, ArrowRight } from 'react-feather'
import { BASIC_LINK, IGlobalDataType, IHeaderImages } from '@/@core/utils/type'

const CarouselComp: FC<IGlobalDataType> = ({ data }) => {
  const carouselRef = useRef<any>()

  return (
    <div className='carousel'>
      <Carousel ref={carouselRef} autoplay dots={false} fade>
        {data?.headerImages.map((image: IHeaderImages) => {
          return (
            <img
              key={image.id}
              src={BASIC_LINK + '' + image.haeder_image_link}
              srcSet={`/assets/mobileCarousel.jpg 480w, /assets/mobileCarousel.jpg 720w, ${
                BASIC_LINK + '' + image.haeder_image_link
              } 1200w`}
              sizes='(max-width: 720px) 100vw, 50vw'
              alt='LOADING...'
              id='carousel-item'
              loading='lazy'
              placeholder='loading...'
            />
          )
        })}
      </Carousel>
      <div className='d-flex justify-center m-t-2 align-center gap-x-2'>
        <button
          className='carousel-btn btn-prev d-flex align-center justify-center'
          onClick={() => carouselRef.current.prev()}
        >
          <ArrowLeft size={15} />
        </button>
        <button
          className='carousel-btn btn-next d-flex align-center justify-center'
          onClick={() => carouselRef.current.next()}
        >
          <ArrowRight size={15} />
        </button>
      </div>
    </div>
  )
}

export default CarouselComp
