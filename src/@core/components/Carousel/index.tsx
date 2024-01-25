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
      <Carousel ref={carouselRef} autoplay dots={true} fade>
        {data?.headerImages.map((image: IHeaderImages) => {
          return (
            <img
              key={image.id}
              src={BASIC_LINK + '' + image.haeder_image_link}
              alt='LOADING...'
              id={`image-${image.id}`}
              placeholder='blur'
            />
          )
        })}
      </Carousel>
      <div className='d-flex justify-center m-t-2 align-center gap-x-2'>
        <button
          aria-label='prev-button'
          className='carousel-btn btn-prev d-flex align-center justify-center'
          onClick={() => carouselRef.current.prev()}
        >
          <ArrowLeft size={15} />
        </button>
        <button
          aria-label='next-button'
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
