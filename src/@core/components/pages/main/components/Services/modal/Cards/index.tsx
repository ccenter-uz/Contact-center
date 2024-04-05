import { Button, Card, Divider } from 'antd'
import React, { FC, useState } from 'react'
import { DataType } from '../../ui/TabContent'
import { useSearchParams } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'react-feather'
import AliceCarousel from 'react-alice-carousel'
import { useLang } from '@/@core/service/hooks/useLang'
import { BASIC_LINK } from '@/@core/utils/type'
import './style.scss'
import DialogSendData from '../../ui/DialogSendData'
import { Link } from '@/navigation'

type Props = {
  data: DataType[]
}

const responsive = {
  0: { items: 1 },
  545: { items: 2 },
  768: { items: 2 },
  1154: { items: 3 },
  1500: { items: 3 }
}

const Cards: FC<Props> = props => {
  const { data } = props
  const { locale } = useLang()
  const [open, setOpen] = useState<boolean>(false)
  const searchParams = useSearchParams()

  // OPEN
  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <>
      <AliceCarousel
        autoHeight
        disableDotsControls
        responsive={responsive}
        mouseTracking={false}
        animationEasingFunction='linear'
        renderPrevButton={({ isDisabled }) => {
          return (
            <Button
              type='primary'
              disabled={isDisabled}
              style={{
                background: !isDisabled ? 'rgba(255, 95, 47, 1)' : 'white',
                borderRadius: '50%',
                width: '35px',
                height: '35px',
                padding: '5px'
              }}
            >
              <ArrowLeft width={'18px'} />
            </Button>
          )
        }}
        renderNextButton={({ isDisabled }) => {
          return (
            <Button
              type='primary'
              disabled={isDisabled}
              style={{
                background: !isDisabled ? 'rgba(255, 95, 47, 1)' : 'white',
                borderRadius: '50%',
                width: '35px',
                height: '35px',
                padding: '5px'
              }}
            >
              <ArrowRight width={'18px'} />
            </Button>
          )
        }}
      >
        {data?.map(item => (
          <Card
            className='cards-card'
            headStyle={{ borderBottom: 'none', color: 'white' }}
            key={item.id}
            bodyStyle={{
              display: 'flex',
              flexDirection: 'column',
              height: '88%'
            }}
            style={{
              backgroundImage: `url(${BASIC_LINK + '' + item.background_image})`,
              color: item.background_image ? '#fff' : '#252525'
            }}
            title={
              <p className='card-title'>
                {(locale === 'ru' && item.title_ru) ||
                  (locale === 'en' && item.title_en) ||
                  (locale === 'uz' && item.title)}
              </p>
            }
          >
            <div className='card-header d-flex align-center  gap-2'>
              <img src={BASIC_LINK + '' + item.icon} alt='icon' width={'22px'} height={'22px'} />
              <div className='card-header-title'>
                <p>
                  {(locale === 'ru' && item.paragraph_ru) ||
                    (locale === 'en' && item.paragraph_en) ||
                    (locale === 'uz' && item.paragraph_uz)}
                </p>
                <span>
                  {(locale === 'ru' && item.span_ru) ||
                    (locale === 'en' && item.span_en) ||
                    (locale === 'uz' && item.span_uz)}
                </span>
              </div>
            </div>
            <Divider style={{ background: 'lightgrey' }} />
            <div className='content-block'>
              <p>
                {(locale === 'ru' && item.content_text_ru) ||
                  (locale === 'en' && item.content_text_en) ||
                  (locale === 'uz' && item.content_text_uz)}
              </p>
            </div>
            <div className='card-footer'>
              <Link
                href={`?service=${searchParams.get('service')}&tarif=${item.id}`}
                scroll={false}
                onClick={() => sessionStorage.setItem('selectedTarif', JSON.stringify(item))}
              >
                <Button
                  onClick={handleOpen}
                  type='primary'
                  style={{
                    background: item.background_image ? '#fff' : 'rgba(255, 95, 47, 1)',
                    color: item.background_image ? '#252525' : '#fff'
                  }}
                >
                  Bog’lanish
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </AliceCarousel>
      <DialogSendData open={open} close={setOpen} />
    </>
  )
}

export default Cards
