'use client'
import { FC, useRef } from 'react'
import './style.scss'
import { Button, Carousel } from 'antd'
import { ArrowLeft, ArrowRight } from 'react-feather'

export const CarouselComp: FC = () => {
  const carouselRef = useRef<any>()

  return (
    <div className='carousel'>
      <Carousel ref={carouselRef} autoplay dots={false}>
        <img src='/assets/header/carousel/img1.svg' alt='item' id='carousel-item' />
        <img src='/assets/header/carousel/img1.svg' alt='item' id='carousel-item' />
        <img src='/assets/header/carousel/img1.svg' alt='item' id='carousel-item' />
        <img src='/assets/header/carousel/img1.svg' alt='item' id='carousel-item' />
      </Carousel>
      <div className='d-flex justify-center align-center gap-x-2'>
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
